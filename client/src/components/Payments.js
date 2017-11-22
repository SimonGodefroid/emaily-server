import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				amount={500} // cents = 5 dollars
				token={token => {
					console.log('token', token);
				}}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			/>
		);
	}
}

export default Payments;
