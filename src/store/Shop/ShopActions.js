import ShopActionTypes from "./ShopTypes";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        collectionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                dispatch(fetchCollectionSuccess(collectionsMap))
            })
            .catch(error => dispatch(fetchCollectionsFailure(error)))
    }
}
