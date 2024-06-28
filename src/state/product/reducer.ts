import {createSlice} from '@reduxjs/toolkit';
import {IProduct} from "../../interface/product";

const initialState = {
    searchProductsRequesting: false,
    searchProductsSuccess: false,
    searchProductsError: '',
    searchProducts: [] as IProduct[],
    categories: [],
    getProductRequesting: false,
    getProductSuccess: false,
    getProductError: '',
    product: {} as IProduct,
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
        getProduct(state, action) {
            state.getProductRequesting = true;
            state.getProductSuccess = false;
            state.product = {} as IProduct;
        },
        getProductSuccess(state, action){
            state.getProductRequesting = false;
            state.getProductSuccess = true;
            state.product = action.payload.item;
        },
        getProductError(state, action) {
            state.getProductRequesting = false;
            state.getProductError = action.payload;
        },
    }
});

export const {
    searchProducts,
    searchProductsSuccess,
    searchProductsError,
    getProduct,
    getProductSuccess,
    getProductError,
} = productSlice.actions;

export default productSlice.reducer;
