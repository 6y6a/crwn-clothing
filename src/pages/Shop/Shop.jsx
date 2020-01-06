import React, {Component} from "react";
import CollectionsOverview from "../../components/CollectionOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";
import {Route} from 'react-router-dom'

const ShopPage = ({match}) => (
    <div className='shop-page'>

        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

    </div>
)

export default ShopPage
