import * as React from "react";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log("This is reached")
console.log(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: "price_1NgweJIUYiNbhYHL5daZof4q", // Replace with your price ID
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `https://rwabukeratrust.com/thanks/`,
        cancel_url: `https://rwabukeratrust.com/`,
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
