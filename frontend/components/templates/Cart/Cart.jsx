import React, { useEffect } from "react";
import Navbar from "@components/elements/Navbar/Navbar";
import CartItems from "@components/modules/CartItems/CartItems";

export default function Cart() {
    return (
        <>
            <Navbar/>
            <CartItems/>
        </>
    );
}