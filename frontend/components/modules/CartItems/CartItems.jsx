import React, { useEffect, useState } from "react";
import { Grid, Container, Badge, Textarea, Text, Button } from "@nextui-org/react";
import { emptyCart, getCart, placeOrder } from "@axios/axios";
import { useSelector } from "react-redux";
import CartCard from "@components/elements/CartCard/CartCard";
import Modal from "@components/elements/Modal/Modal";

export default function CartItems() {
    const [cartItems, setCartItems] = useState([]);
    const [amount, setAmount] = useState(0);
    const [address, setAddress] = useState("");
    const [showModal, setShowModal] = useState(false);
    const { cartId } = useSelector((state) => {
        return state.user;
    });
    
    useEffect(() => {
        (async () => {
            try {
                const { data } = await getCart(cartId);
                setCartItems(data.products);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    useEffect(()=>{
        const total = cartItems.reduce((accumulator, current)=>{
            return accumulator + current.product.price;
        }, 0);
        setAmount(total);
    }, [cartItems]);

    async function order(){
        const products = [];
        cartItems.forEach((item)=>{
            const data = {product: item.product._id}
            products.push(data);
        });
        const toSend = {products, amount, address};
        try {
            const { data } = await placeOrder(toSend);
            openModal();
            await emptyCart(cartId);
            setCartItems([]);
            setAddress("");
        }catch (err){
            console.error(err);
        }
    }

    function openModal(){
        setShowModal(true);
        setTimeout(()=>{
            setShowModal(false);
        }, 3000);
    }

    function closeModal(){
        setShowModal(false);
    }

    return (
        <>
            <Modal visible={showModal} closeHandler={closeModal}/>
            <Container
                alignItems="center"
                display="flex"
                css={{ flexDirection: "column" }}
            >
                {cartItems.map((val, idx) => (
                    <CartCard
                        key={idx}
                        name={val.product.name}
                        description={val.product.description}
                        price={val.product.price}
                        quantity={val.quantity}
                        setCartItems={setCartItems}
                        id={val.product._id}
                        cartId={cartId}
                    />
                ))}
                <Textarea
                    label="Address"
                    placeholder="Enter your address"
                    css={{ width: "400px", marginTop: "10px" }}
                    onChange={(e)=>setAddress(e.target.value)}
                    value={address}
                />
                <Container css={{ width: "400px", margin: "20px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Text
                        h3
                        css={{
                            lineHeight: "$xs",
                            fontWeight: "$bold",
                            margin: 0
                        }}
                    >
                       ₹ {amount}
                    </Text>
                    <Button onClick={order} disabled={!address || cartItems?.length === 0} size="sm">
                        Place Order          
                    </Button>
                </Container>
            </Container>
        </>
    );
}
