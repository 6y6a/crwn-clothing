import React from "react";
import {connect} from 'react-redux'

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import {selectCartItems} from "../../store/Cart/CartSelectors";
import {createStructuredSelector} from "reselect";

import './CartDropdown.scss'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem item={cartItem} key={cartItem.id} />
                ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
