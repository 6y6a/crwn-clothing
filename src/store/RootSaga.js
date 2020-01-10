import {all, call} from 'redux-saga/effects'
import {fetchCollectionStart} from "./Shop/ShopSagas";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart)

    ])
}
