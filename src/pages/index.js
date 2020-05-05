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
export const query = graphql`
  query {
    file(relativePath: { eq: "../images/logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 768) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`;
const Home = () => {
  // Replace with your own publishable key: https://dashboard.stripe.com/test/apikeys
  var PUBLISHABLE_KEY = "pk_test_HHeSNy0geAn8XSYYXH1kKbSp00bp2UFeGU";
  // Replace with the domain you want your users to be redirected back to after payment
  var DOMAIN = "www.nemea.xyz"; // window.location.hostname;
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
