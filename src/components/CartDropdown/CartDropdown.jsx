import React from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import CartItem from "../CartItem/CartItem";
import {selectCartItems} from "../../store/Cart/CartSelectors";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../store/Cart/CartActions";

import {CardDropdownContainer, CardDropdownItems, CardDrowdownEmpty, CardDropdownButton} from "./CartDropdownStyles";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CardDropdownContainer>
        <CardDropdownItems>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem item={cartItem} key={cartItem.id} />
                ))
            ) : (
                <CardDrowdownEmpty>Your cart is empty</CardDrowdownEmpty>
            )}
        </CardDropdownItems>
        <CardDropdownButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>Go to checkout</CardDropdownButton>
    </CardDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps)(CartDropdown))
