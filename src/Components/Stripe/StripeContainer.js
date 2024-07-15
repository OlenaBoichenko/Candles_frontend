import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckOutForm";

const PUBLIC_KEY =
  "pk_test_51LgCbFKzSIfZo5QvC28heCqHaN265gMhLv73vsgq2ReRjsxA0JWnu3qTlDIGscPbDKfcqAKl8RmesPTPOgx2ITZU00BlwWO0ms";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
