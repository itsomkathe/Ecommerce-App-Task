import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    id: null,
    cartId: null,
    isAuth: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.id = action.payload._id;
            state.cartId = action.payload.cart;
            state.isAuth = action.payload.isAuth;
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
