import React, { useEffect, useState } from "react";
import ProductCard from "@components/elements/ProductCard/ProductCard";
import { Grid, Container, Badge } from "@nextui-org/react";
import { getCart, getCategories, getProducts } from "@axios/axios";
import { useSelector } from "react-redux";

export default function CardsList() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const { cartId } = useSelector((state) => {
        return state.user;
    });

    useEffect(() => {
        (async () => {
            try {
                let category = categories[selectedCategory];
                if (selectedCategory === 0) category = "";
                const { data } = await getProducts(category);
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [selectedCategory]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getCategories();
                setCategories(data);
            } catch (err) {
                console.error(err);
            }
        })();
        (async () => {
            try {
                const { data } = await getCart(cartId);
                setCartItems(data.products);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <>
            <Container
                css={{ margin: "1rem 0", display: "flex" }}
                justify="center"
            >
                {categories.map((cat, idx) => (
                    <Badge
                        key={idx}
                        color={selectedCategory === idx && "primary"}
                        css={{
                            minWidth: "3rem",
                            cursor: "pointer",
                            marginRight: "0.5rem"
                        }}
                        onClick={() => setSelectedCategory(idx)}
                    >
                        {cat}
                    </Badge>
                ))}
            </Container>
            <Grid.Container gap={2} justify="center">
                {products.map((prod, idx) => (
                    <Grid key={idx} xs={16} sm={6} md={3}>
                        <ProductCard
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                            id={prod._id}
                            cartId={cartId}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    </Grid>
                ))}
            </Grid.Container>
        </>
    );
}
