import {takeLatest, call, put} from 'redux-saga/effects'

import ShopActionTypes from "./ShopTypes";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsStart, fetchCollectionSuccess} from "./ShopActions";

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionStart () {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}
