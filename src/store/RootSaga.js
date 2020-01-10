import {all, call} from 'redux-saga/effects'
import {fetchCollectionStart} from "./Shop/ShopSagas";
import {userSagas} from "./User/UserSagas";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart),
        call(userSagas)

    ])
}
