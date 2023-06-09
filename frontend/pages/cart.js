import Head from "next/head";
import Cart from "@components/templates/Cart/Cart";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function CartPage() {
    const router = useRouter();
    const { isAuth } = useSelector((state) => {
        return state.user;
    });
    useEffect(()=>{
        if(!isAuth){
            router.push("/login")
        }
    }, []);

    return (
        <>
            <Head>
                <title>Cart</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Cart/>
            </main>
        </>
    );
}