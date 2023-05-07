import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock: false,
    brand: [],
    keyword: "",
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {

    }
})


// export const { increment, decrement, incrementByAmount } = filterSlice.actions;

export default filterSlice.reducer;
