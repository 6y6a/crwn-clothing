import React from "react";

import {connect} from 'react-redux'
import {toggleCartHidden} from "../../store/Cart/CartActions";
import {selectCartItemsCount} from "../../store/Cart/CartSelectors";
import {createStructuredSelector} from "reselect";

import {CartIconContainer, CartIconCount, ShopingIcon} from "./CartIconStyles";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShopingIcon className='shopping-icon'/>
        <CartIconCount className='item-count'>{itemCount}</CartIconCount>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
