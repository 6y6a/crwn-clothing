import React from "react";

import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import './CollectionsOverview.scss'
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import {selectCollectionForPreview} from "../../store/Shop/ShopSelectors";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
