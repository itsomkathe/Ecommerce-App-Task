import {
    Card,
    Grid,
    Text,
    Link,
    Image,
    Button,
    Loading
} from "@nextui-org/react";
import { deleteFromCart } from "@axios/axios";
import { useState } from "react";

export default function CartCard({
    name,
    description,
    price,
    quantity,
    cartId,
    id,
    setCartItems
}) {
    const [loading, setLoading] = useState(false);

    async function remove() {
        try {
            setLoading(true);
            const { data } = await deleteFromCart(cartId, { productId: id });
            setLoading(false);
            setCartItems(data.products);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    }

    return (
        <Card css={{ p: "$6", mw: "400px", margin: "10px 0" }}>
            <Card.Header>
                <Card.Image
                    alt="nextui logo"
                    src="/Images/jordan.jpeg"
                    height="100px"
                    width="150px"
                    css={{ borderRadius: "16px", objectFit: "cover" }}
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h3 css={{ lineHeight: "$xs", margin: 0 }}>
                            {name}
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text
                            h3
                            css={{
                                lineHeight: "$xs",
                                fontWeight: "$bold",
                                margin: "10px 0 0 0"
                            }}
                        >
                            ₹ {price}
                        </Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>{description}</Text>
            </Card.Body>
            <Card.Footer css={{ justifyContent: "space-around" }}>
                <Button  onClick={remove} flat color="error" size="sm">
                    {loading ? (
                        <Loading size="xs" color="white" />
                    ) : (
                        "Remove"
                    )}
                </Button>
            </Card.Footer>
        </Card>
    );
}
