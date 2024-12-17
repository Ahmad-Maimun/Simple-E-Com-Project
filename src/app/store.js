import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categories/categorySlice.js";
import productSlice from "../features/products/productSlice.js";

const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice
    }
})

export default store