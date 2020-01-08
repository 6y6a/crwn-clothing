import ShopActionTypes from "./ShopTypes";

export const updateCollections = (collectionsMap) => {
    return {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectionsMap
    }
}
