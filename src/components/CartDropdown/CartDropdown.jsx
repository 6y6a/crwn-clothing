import React from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import {selectCartItems} from "../../store/Cart/CartSelectors";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../store/Cart/CartActions";

import './CartDropdown.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
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
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps)(CartDropdown))
