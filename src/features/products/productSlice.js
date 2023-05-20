import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct, fetchProducts, postProduct } from "./productsAPI";

const initialState = {
    products: [],
    isLoading: false,
    postSuccess: false,
    deleteSuccess: false,
    isError: false,
    error: ""
}

export const getProduct = createAsyncThunk("products/getProduct", async () => {
    // const res = await fetch("http://localhost:5000/products");
    // const data = await res.json();
    // return data;

    const products = fetchProducts();
    return products;

})

export const addProduct = createAsyncThunk("products/addProduct", async (data) => {
    const products = postProduct(data);
    return products;
})

export const removeProduct = createAsyncThunk("product/deleteProduct", async (id, thunkAPI) => {
    // const res = await fetch(`http://localhost:5000/product/${id}`, {
    //     method: "DELETE",
    // });
    // const data = await res.json();
    // return data;

    const products = await deleteProduct(id);
    thunkAPI.dispatch(removeProductList(id))
    return products;
})



const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        togglePostSuccess: (state, action) => {
            state.postSuccess = false;
        },
        toggleDeleteSuccess: (state, action) => {
            state.deleteSuccess = false;
        },
        removeProductList: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.products = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(addProduct.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.postSuccess = false;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.postSuccess = true;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.products = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.postSuccess = false;
            })
            .addCase(removeProduct.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.postSuccess = false;
                state.deleteSuccess = false;
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                state.postSuccess = true;
                state.isLoading = false;
                state.isError = false;
                state.deleteSuccess = true;
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.products = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.postSuccess = false;
                state.deleteSuccess = false;
            })
    }
})
export const { togglePostSuccess, toggleDeleteSuccess, removeProductList } = productSlice.actions;
export default productSlice.reducer;