import React from "react";

import SEO from "../components/seo";
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

const bottle = require("../images/bottle.webp");

const Home = () => {
  // Replace with your own publishable key: https://dashboard.stripe.com/test/apikeys
  var PUBLISHABLE_KEY = "pk_test_HHeSNy0geAn8XSYYXH1kKbSp00bp2UFeGU";
  // Replace with the domain you want your users to be redirected back to after payment
  var DOMAIN = "nemea.xyz"; // window.location.hostname;
  // Replace with a SKU for your own product (created either in the Stripe Dashboard or with the API)
  var SUBSCRIPTION_YEARLY_PLAN_ID = "plan_HBLfmTZ415bQs8";
  var SUBSCRIPTION_6MONTH_PLAN_ID = "plan_HBLgu7kUCybVKs";
  var SUBSCRIPTION_QUARTERLY_PLAN_ID = "plan_HBLiwxfPHtSd1J";
  var SUBSCRIPTION_MONTHLY_PLAN_ID = "plan_HBLhvOBXUOLqHp";

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

  /*
  document.getElementById("basic-btn").addEventListener("click", function(evt) {
    redirectToCheckout(SUBSCRIPTION_BASIC_PLAN_ID);
  });

  document.getElementById("pro-btn").addEventListener("click", function(evt) {
    redirectToCheckout(SUBSCRIPTION_PRO_PLAN_ID);
  });
*/
  return (
    <>
      <SEO title="Drive by Nemea" />
      <div className="w-full">
        <div
          className="
        lg:h-hero
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col"
        >
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
            <img
              className="mb-4 w-96 mw-96 sm:w-96 sm:mr-96"
              alt="Bottle"
              src={bottle}
            />
            <p>
              Athletic Performance Thus far, research into the
              performance-enhancing effects of cordyceps has yielded mixed
              results. In a 2010 study published in the Journal of Alternative
              and Complementary Medicine, a daily cordyceps supplement appeared
              to improve exercise performance, albeit modestly, in a small group
              of older adults, ages 50 to 75. Meanwhile, a 2016 study from the
              University of North Carolina at Chapel Hill showed that daily
              cordyceps supplementation gradually increased the maximum oxygen
              intake (VO2 max) in young adults after three weeks.2﻿ What it
              didn't change was the time to exhaustion (TTE) or the stage in
              exercise when breathing becomes labored (ventilatory threshold).
            </p>
            <p>
              In short, an improvement in oxygen consumption didn't translate to
              improved performance. It is unclear whether long-term
              supplementation might further improve upon these results. Diabetes
              Cordyceps has long been used as a traditional treatment for
              diabetes in China. While there are few quality studies
              investigating these effects in humans, several animal studies have
              been conducted, usually with disappointing or inconclusive
              results.
            </p>
            <p>
              A 2012 study from Taiwan reported that a four-week course of a
              cordyceps extract was able to improve cholesterol levels and
              reduce weight in diabetic mice but did nothing to alter blood
              sugar levels or improve insulin resistance. Despite this, the
              researchers suggested that the benefits of weight loss in
              controlling diabetes may be significant. Moreover, an improved
              cholesterol profile is generally associated with increased insulin
              sensitivity.{" "}
            </p>
            <p>
              Natural Remedies for Type 2 Diabetes High Blood Pressure Cordyceps
              are believed to have potent anti-inflammatory and antioxidant
              effects, both of which may help prevent or treat high blood
              pressure (hypertension). Many of these benefits have been
              attributed to a compound known as cordycepin, which is similar in
              molecular composition to adenosine. Like adenosine, cordycepin
              appears able to relax blood vessels, improving circulation and
              lowering blood pressure. The same benefits may be extended to the
              respiratory tract, according to a 2017 study from China.5﻿ When
              taken daily, a cordyceps extract appears to relax airway
              constriction and improve quality of life measures in people with
              moderate to severe asthma.
            </p>
            <div>
              <Button
                full
                title="Yearly Subscription"
                onClick={redirectToCheckout}
              />
              <Button
                full
                title="6 Month Subscription"
                onClick={redirectToCheckout}
              />
              <Button
                full
                title="Quarterly (every 3 months) Subscription"
                onClick={redirectToCheckout}
              />
              <Button
                full
                title="Monthly Subscription"
                onClick={redirectToCheckout}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
