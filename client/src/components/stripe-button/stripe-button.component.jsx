import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51I8AgzCGNECLgR8Rl1dvJic9podlY5uE09HiwRHEzXckjY5TRySGaVFu3oXOau8XNTvwuNTeBxOdJ7lBztsAACtT00EaC8nywQ";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Successful payment");
      })
      .catch((error) => {
        console.log("Payment error:", JSON.parse(error));
        alert("There was an error occured with payment,please check whether you actually have written right card number");
      });
  };
  return <StripeCheckout label="Pay Now" name="CRWN Clothing Ltd." billingAddress shippingAddress image="https://svgshare.com/i/CUz.svg" description={`Your total is $${price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />;
};

export default StripeButton;
