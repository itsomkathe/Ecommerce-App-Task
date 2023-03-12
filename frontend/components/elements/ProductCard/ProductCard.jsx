import {
    Card,
    Text,
    Button,
    Row,
    Image,
} from "@nextui-org/react";
import { addToCart } from "@axios/axios";
import { useEffect, useState } from "react";

export default function ProductCard({
    name,
    description,
    price,
    cartItems,
    id,
    cartId,
    setCartItems
}) {
    const [inCart, setInCart] = useState(false);
    async function add() {
        try {
            const { data } = await addToCart(cartId, { productId: id });
            setInCart(true);
        } catch (err) {
            console.error(err);
        }
    }

    function isInCart(id){
        const bool = cartItems?.some(val=>val.product._id == id);
        return bool;
    }

    useEffect(()=>{
        const present = isInCart(id);
        setInCart(present);
    }, [cartItems]);
    
    return (
        <Card css={{ mw: "330px" }}>
            <Card.Body css={{ py: "$10" }}>
                <Card.Image
                    src="/Images/jordan.jpeg"
                    objectFit="cover"
                    width="100%"
                    height={240}
                    alt="Card image"
                    css={{ borderRadius: "12px" }}
                />
                <Text
                    h4
                    css={{
                        lineHeight: "$xs",
                        marginTop: "1rem",
                        fontWeight: "bold"
                    }}
                >
                    {name}
                </Text>
                <Text>{description}</Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
                <Row align="center" justify="space-between">
                    <Text
                        h3
                        css={{
                            lineHeight: "$xs",
                            fontWeight: "$bold",
                            margin: 0
                        }}
                    >
                        ₹ {price}
                    </Text>
                    {!inCart ? (
                        <Button onClick={add} size="sm">
                            Add to Cart
                        </Button>
                    ) : (
                        <Button flat color="success" size="sm">
                            Go to Cart
                        </Button>
                    )}
                </Row>
            </Card.Footer>
        </Card>
    );
}
