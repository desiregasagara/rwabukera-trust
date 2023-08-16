import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import * as styles from './styles.module.scss';



let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51Ne1taEerb0AOO8oxzB0424U2wz6ZbLVhvLrbxNm6YcoFIv0AVxFePYnlczl3DGYkePmP8dMY9RDkEEyHuA128ow004DzAA2qF")
  }
  return stripePromise
}

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1NeugeEerb0AOO8oT5SPaUV6", quantity: 1 }],
      successUrl: `http://localhost:8000/thanks/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <button
      disabled={loading}
      className={styles.btn}

      onClick={redirectToCheckout}
      
    >
      MAKE A DONATION
    </button>
  )
}

export default Checkout