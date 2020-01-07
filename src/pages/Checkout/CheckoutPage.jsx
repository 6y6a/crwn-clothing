import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotal} from "../../store/Cart/CartSelectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    TotalContainer,
    WarningContainer,
    HeaderBlockContainer
} from "./CheckoutPageStyles";

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        <TotalContainer>
            <span>Total: {total}</span>
        </TotalContainer>
        <WarningContainer>
            *Please use test credit card for payment*
            <br/>
            4242 4242 4242 4242 - Exp: 01/20 - CVV:123
        </WarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
