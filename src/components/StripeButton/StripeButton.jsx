import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishKey = 'pk_test_0hTznBYTZI8QXDBqyTAUMIlg00FjOqQLWU'

    const onToken = (token) => {
        console.log(token)
    }

    return (
        <StripeCheckout
            label='Pay now'
            name='Cloth'
            token={onToken}
            stripeKey={publishKey}
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
        />
    )
}

export default StripeCheckoutButton
