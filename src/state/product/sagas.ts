import {call, all, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
    searchProducts,
    searchProductsError,
    searchProductsSuccess
} from './reducer';

const searchProductsAPI = (query: string) => {
    return fetch(
        `http://localhost:3000/api/items?q=${query}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        },
    )
        .then(response => response.json())
        .then(json => {
            if (json?.author) {
                return json;
            } else {
                throw json;
            }
        })
        .catch(error => {
            throw error;
        });
};

function* searchProductsFlow(
    action: PayloadAction<any>,
): Generator<any, any, any> {
    try {
        const {query} = action.payload;
        const products = yield call(searchProductsAPI, query);
        yield put(searchProductsSuccess(products));
    } catch (error) {
        yield put(searchProductsError(error));
    }
}

function* productWatcher() {
    yield all([
        takeEvery(searchProducts.type, searchProductsFlow),
    ]);
}

export default productWatcher;
