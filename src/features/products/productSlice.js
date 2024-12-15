import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirebaseData } from "../../database/firebaseUtils";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: null
};

export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        let data = await getFirebaseData();

        console.log(data);


        return [];

    }
)

const productsSlice = ({
    name: "products",
    initialState,
    reducers: {},
    extraReducer: (builder) => {
        builder.addCase('pending', (state, action) => {
            state.isError = false;
            state.isLoading = true;
        })
        builder.addCase('fulfilled', (state, action) => {
            state.isLoading = false;
            console.log(action);
        })
        builder.addCase('rejected', (state, action) => {
            state.isError = true;
            state.error = action.payload.error?.message;
        })
    }
});

export default productsSlice