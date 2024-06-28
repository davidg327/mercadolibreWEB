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
            state.searchProductsRequesting = false;
            state.searchProductsSuccess = true;
            state.searchProducts = action.payload.items;
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
