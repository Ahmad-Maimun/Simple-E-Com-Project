import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice.js";
import categorySlice from "../features/categories/categorySlice.js";
import productSlice from "../features/products/productSlice.js";

const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice,
        auth: authSlice
    }
})

export default store