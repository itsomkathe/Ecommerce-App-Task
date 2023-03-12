import React, { useState } from "react";
import Form from "@components/modules/Form/Form";
import { createUser } from "@axios/axios";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    const router = useRouter();

    async function createAccount(){
        try{
            const res = await createUser(credentials);
            router.push("/login");
        }catch(err){
            console.error(err);
        }
    }

    return(
        <Form
            title={"Signup"}
            buttonText={"Sign Up"}
            credentials={credentials}
            setCredentials={setCredentials}
            isSignup={true}
            onClick={createAccount}
        />
    )
}
