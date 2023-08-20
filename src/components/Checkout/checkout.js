import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import * as styles from './styles.module.scss';



let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_51NflNuIUYiNbhYHLuD2NuQPfvtVWkewmv3c5IMnfTeETOmIMOQFHWcqj7aS7GuGyzKxscmyojc2K06zt2bSRTsJS00iuDNqNUP")
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
      lineItems: [{ price: "price_1NgweJIUYiNbhYHL5daZof4q", quantity: 1 }],
      successUrl: `https://rwabukeratrust.com/thanks/`,
      cancelUrl: `https://rwabukeratrust.com/`,
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
      Donate
    </button>
  )
}

export default Checkout