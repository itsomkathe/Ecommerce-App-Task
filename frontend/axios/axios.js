const axios = require("axios");

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

export const getUser = () =>api.get("/api/user", {withCredentials: true});
export const createUser = (data) => api.post("/api/user/createUser", data);
export const loginUser = (data) => api.post("/api/auth/login", data);

export const getProducts = (category) =>api.get(`/api/product/products?category=${category}`);
export const getCategories = () =>api.get("/api/categories");

export const getCart = (id) =>api.get(`/api/cart/${id}`);
export const addToCart = (cartId, data) =>api.patch(`/api/cart/addProduct/${cartId}`, data);
export const deleteFromCart = (cartId, data) =>api.patch(`/api/cart/deleteProduct/${cartId}`, data);
export const emptyCart = (cartId) =>api.patch(`/api/cart/emptyCart/${cartId}`);

export const placeOrder = (data)=>api.post("/api/order", data);
