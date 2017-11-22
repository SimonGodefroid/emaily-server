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
				name={`Emaily`}
				description={`$5 for 5 email credits`}
			>
				<a class="waves-effect waves-light btn">Add Credits</a>
			</StripeCheckout>
		);
	}
}

export default Payments;
