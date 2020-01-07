import React from "react";

import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import {selectCollectionForPreview} from "../../store/Shop/ShopSelectors";

import {CollectionOverviewContainer} from "./CollectionOverviewStyles";

const CollectionsOverview = ({collections}) => (
    <CollectionsOverview>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverview>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
