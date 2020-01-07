import React from "react";

import {connect} from 'react-redux'
import {addItem} from "../../store/Cart/CartActions";

import {
    AddButton,
    CollectionItemContainer,
    NameContainer,
    PriceContainer,
    CollectionFooter,
    BackgroundImage
} from "./CollectionItemStyles";

const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <CollectionFooter>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooter>
            <AddButton inverted onClick={() => addItem(item)}>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
