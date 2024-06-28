import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import * as styles from "./styles.module.scss";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    const apiKey = process.env.GATSBY_STRIPE_PUBLISHABLE_KEY;
    if (!apiKey) {
      console.error("Stripe publishable key is missing");
    }
    stripePromise = loadStripe(apiKey);
  }
  return stripePromise;
};

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const session = await response.json();
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (err) {
      console.warn("Error:", err);
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      className={styles.btn}
      onClick={redirectToCheckout}
    >
      Pay your membership
    </button>
  );
};

export default Checkout;
