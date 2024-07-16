import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

import { Footer } from "../Footer/Footer";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      const response = await axios.post(
        "https://candles-stripe-1.onrender.com/",
        {
          amount: 999,
          id: id,
        }
      );
      if (response.data.success) {
        setMessageSuccess(true);
      }
    }
  };

  return (
    <div>
      <div className="check_out_form">
        <h1>CheckOut</h1>
        {!messageSuccess ? (
          <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement />
            <button disabled={isLoading || !stripe || !elements} id="submit">
              <span id="button-text">
                {isLoading ? (
                  <div className="spinner" id="spinner"></div>
                ) : (
                  "Pay now"
                )}
              </span>
            </button>
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
