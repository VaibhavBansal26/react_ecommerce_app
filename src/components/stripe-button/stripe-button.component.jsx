import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_51GuCxhGAvbykC2XsnqXirqsc72g94NYqbgF0jUu2TKyoe70pFUhspD0WfwV7aieZqX1M3GxK4GlSJrSYwomzx2Nj00uII6fRQZ';

    const onToken = token =>{
        console.log(token);
        alert('Payment Sucessful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name="Bansal Clothing"
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;