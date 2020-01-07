import React from "react";
import {connect} from 'react-redux'
import {selectCollection} from "../../store/Shop/ShopSelectors";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

import {CollectionPageContainer, CollectionItems, CollectionTitle} from "./CollectionStyles";

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItems>
                {items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </CollectionItems>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
