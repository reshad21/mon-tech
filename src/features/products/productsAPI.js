
// before using axios for get data
// export const fetchProducts = async () => {
//     const res = await fetch("http://localhost:5000/products");
//     const data = await res.json();
//     return data;
// }

// after using axios for get data
import axios from "../../utils/axios.config";

export const fetchProducts = async () => {
    const data = await axios.get("/products");
    return data.data;
}

export const postProduct = async (productData) => {
    await axios.post("/product", productData);
}

export const deleteProduct = async (id) => {
    await axios.delete(`/product/${id}`);
}

