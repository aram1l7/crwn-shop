import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51I8AgzCGNECLgR8Rl1dvJic9podlY5uE09HiwRHEzXckjY5TRySGaVFu3oXOau8XNTvwuNTeBxOdJ7lBztsAACtT00EaC8nywQ";
  const onToken = (token) => {
    console.log(token);
    alert("Payment complete");
  };
  return <StripeCheckout label="Pay Now" name="CRWN Clothing Ltd." billingAddress shippingAddress image="https://svgshare.com/i/CUz.svg" description={`Your total is $${price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />;
};

export default StripeButton;
