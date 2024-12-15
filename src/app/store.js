import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
    },
});

export default store;