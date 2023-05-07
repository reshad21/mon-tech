import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    // initialState: {
    //     item: []
    // },
    reducers: {
        addToCart: (state, action) => {
            console.log('addToCart reducer triggered');
            state.item= [...state.item,{...action.payload}];
            // return {
            //     ...state,
            //     item: [...state.item, action.payload],
            // };
        }
    }
})


export const { addToCart } = cartSlice.actions; //this will give you all actions

export default cartSlice.reducer; //this will give you state
