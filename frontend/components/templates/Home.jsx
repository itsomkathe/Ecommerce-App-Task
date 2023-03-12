import React, { useEffect } from "react";
import Navbar from "@components/elements/Navbar/Navbar";
import CardsList from "@components/modules/CardsList/CardsList";

export default function Home() {
    return (
        <>
            <Navbar/>
            <CardsList/>
        </>
    );
}
