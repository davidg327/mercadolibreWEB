import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    searchProductsRequesting: false,
    searchProductsSuccess: false,
    searchProductsError: '',
    searchProducts: [],
    categories: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        searchProducts(state, action){
            state.searchProductsRequesting = true;
            state.searchProductsSuccess = false;
            state.searchProducts = [];
        },
        searchProductsSuccess(state, action) {
            console.log(action.payload, 'reducer');
            state.searchProductsRequesting = false;
            state.searchProductsSuccess = true;
            state.searchProducts = action.payload;
            state.categories = action.payload.categories;
        },
        searchProductsError(state, action){
            state.searchProductsRequesting = false;
            state.searchProductsError = action.payload;
        },
    }
});

export const {
    searchProducts,
    searchProductsSuccess,
    searchProductsError,
} = productSlice.actions;

export default productSlice.reducer;
