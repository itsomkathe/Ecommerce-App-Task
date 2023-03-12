import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "@axios/axios";
import { setUser } from "@store/UserSlice";

export function useRefreshLoader() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await getUser();
                const profile = { ...data, isAuth: true };
                await dispatch(setUser(profile));
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { loading };
}
