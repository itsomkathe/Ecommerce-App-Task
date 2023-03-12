import React, { useState } from "react";
import Form from "@components/modules/Form/Form";
import { loginUser } from "@axios/axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const router = useRouter();

    async function login(){
        try{
            const res = await loginUser(credentials);
            router.replace("/");
            router.refresh();
        }catch(err){
            console.error(err);
        }
    }

    return(
        <Form
            title={"Login"}
            buttonText={"Log In"}
            credentials={credentials}
            setCredentials={setCredentials}
            isSignup={false}
            onClick={login}
        />
    )
}
