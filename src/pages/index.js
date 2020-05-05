import React from "react";

import SEO from "../components/seo";
import InfoCard from "../components/InfoCard";
import {
  Center,
  Footer,
  Tag,
  Showcase,
  DisplaySmall,
  DisplayMedium,
} from "../components";
import CartLink from "../components/CartLink";
import { titleIfy, slugify } from "../../utils/helpers";
import { loadStripe } from "@stripe/stripe-js";
import Button from "../components/Button";

import { graphql } from "gatsby";
import ProductCard from "../components/ProductCard";

const bottle = require("../images/bottle.webp");

const Home = () => {
  // Replace with your own publishable key: https://dashboard.stripe.com/test/apikeys
  var PUBLISHABLE_KEY = "pk_live_kHF5JolrbM2FDg5l7SATIzYW00og4QWX4O";
  // Replace with the domain you want your users to be redirected back to after payment
  var DOMAIN = "www.nemea.xyz"; // window.location.hostname;
  // Replace with a SKU for your own product (created either in the Stripe Dashboard or with the API)
  var SUBSCRIPTION_YEARLY_PLAN_ID = "plan_HDzabwEL9y1ffW";
  var SUBSCRIPTION_6MONTH_PLAN_ID = "plan_HDzaTxSsX3WDqD";
  var SUBSCRIPTION_QUARTERLY_PLAN_ID = "plan_HDzacsKfsSGFdD";
  var SUBSCRIPTION_MONTHLY_PLAN_ID = "plan_HDzaVP5xpcOxCH";

  const stripePromise = loadStripe(PUBLISHABLE_KEY);

  // Handle any errors from Checkout
  var handleResult = function(result) {
    if (result.error) {
      var displayError = document.getElementById("error-message");
      displayError.textContent = result.error.message;
    }
  };

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan: SUBSCRIPTION_YEARLY_PLAN_ID, quantity: 1 }],
      successUrl:
        "https://" + DOMAIN + "/success.html?session_id={CHECKOUT_SESSION_ID}",
      cancelUrl: "https://" + DOMAIN + "/canceled.html",
    });

    if (error) {
      console.warn("Error:", error);
    }
  };
  const redirectToCheckout6 = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan: SUBSCRIPTION_6MONTH_PLAN_ID, quantity: 1 }],
      successUrl:
        "https://" + DOMAIN + "/success.html?session_id={CHECKOUT_SESSION_ID}",
      cancelUrl: "https://" + DOMAIN + "/canceled.html",
    });

    if (error) {
      console.warn("Error:", error);
    }
  };
  const redirectToCheckout1 = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan: SUBSCRIPTION_MONTHLY_PLAN_ID, quantity: 1 }],
      successUrl:
        "https://" + DOMAIN + "/success.html?session_id={CHECKOUT_SESSION_ID}",
      cancelUrl: "https://" + DOMAIN + "/canceled.html",
    });

    if (error) {
      console.warn("Error:", error);
    }
  };

  return (
    <>
      <SEO title="Drive by Nemea" />
      <div>
        <div className="w-full">
          <Button title="Yearly Subscription" onClick={redirectToCheckout} />
          <Button title="6 Month Subscription" onClick={redirectToCheckout6} />
          <Button title="Monthly Subscription" onClick={redirectToCheckout1} />
        </div>
        <div class="justify-center sm:block md:block lg:flex xl:flex">
          <InfoCard
            class="sm:w-full md:w-full lg:w-2/3 xl:w-2/3"
            text="A 2012 study from Taiwan reported that a four-week course of a
              cordyceps extract was able to improve cholesterol levels."
          />
          <img class="sm:w-full md:w-full lg:w-1/3 xl:w-1/3" src={bottle} />
        </div>
      </div>
    </>
  );
};

export default Home;
