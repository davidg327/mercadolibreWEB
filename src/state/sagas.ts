import {all, fork} from 'redux-saga/effects';
import ProductSagas from './product/sagas';

export function* Sagas() {
    yield all([
        fork(ProductSagas),
    ]);
}
