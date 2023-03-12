import Head from "next/head";
import Login from "@components/templates/Auth/Login";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function LoginPage() {
    const router = useRouter();
    const { isAuth } = useSelector((state) => {
        return state.user;
    });
    
    useEffect(()=>{
        if(!isAuth){
            router.push("/login")
        }else{
            router.push("/")
        }
    }, [isAuth]);
    
    return (
        <>
            <Head>
                <title>Log In</title>
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
                <Login/>
            </main>
        </>
    );
}