import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // state.cart = [...state.cart, { ...action.payload }];
            // state.cart.push(action.payload);

            const selectedProduct = state.cart.find(product => product._id === action.payload._id);
            if (!selectedProduct) {
                const product = { ...action.payload, quantity: 1 }
                state.cart.push(product);
            }
            else {
                selectedProduct.quantity = selectedProduct.quantity + 1;
                state.cart
                    .filter(product => product._id !== selectedProduct._id)
                    .push(selectedProduct);
            }
        },

        removeFromCart: (state, action) => {
            console.log(action.payload);
            if (action.payload.quantity > 1) {
                const product = {
                    ...action.payload,
                    quantity: action.payload.quantity - 1
                }

                state.cart = state.cart.filter(product => product._id !== action.payload._id);

                state.cart.push(product);
            }
            else {
                state.cart = state.cart.filter(product => product._id !== action.payload._id);
            }

        }

    }
})


export const { addToCart, removeFromCart } = cartSlice.actions; //this will give you all actions

export default cartSlice.reducer; //this will give you state
