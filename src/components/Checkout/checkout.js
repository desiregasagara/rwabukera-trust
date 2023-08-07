import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import * as styles from './styles.module.scss';



let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51NP2z5FvrpXTb6ZSFQlW1OTTBOq4QWiTxxEDPHrEs4yl5ePW4GHDB5gfCkg17ALHtnc8bxyKFmnaadmp8sXEAfnf00tvNDMHkN")
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
      lineItems: [{ price: "price_1NPTLVFvrpXTb6ZSEBDF4FGR", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
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