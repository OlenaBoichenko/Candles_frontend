import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

import { Footer } from "../Footer/Footer";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://candles-stripe-1.onrender.com",
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccess(true);
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="check_out_form">
        <h1>CheckOut</h1>
        {!messageSuccess ? (
          <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement />
            <button>Pay</button>
          </form>
        ) : (
          <div>
            <h3>Your payment was successful</h3>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
