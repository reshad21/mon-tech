import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productSlice from '../features/products/productSlice';

export const store = configureStore({
    reducer: {
        // filter: filterSlice,
        cart: cartReducer,
        product: productSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})