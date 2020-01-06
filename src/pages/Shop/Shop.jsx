import React, {Component} from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import {selectCollections} from "../../store/Shop/ShopSelectors";

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
