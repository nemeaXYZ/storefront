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

import { graphql } from "gatsby";

const Home = ({ data: gqlData }) => {
  const {
    inventoryInfo,
    categoryInfo: { data },
  } = gqlData;
  const categories = data.slice(0, 2);
  const inventory = inventoryInfo.data.slice(0, 4);
  // Replace with your own publishable key: https://dashboard.stripe.com/test/apikeys
  var PUBLISHABLE_KEY = "pk_test_HHeSNy0geAn8XSYYXH1kKbSp00bp2UFeGU";
  // Replace with the domain you want your users to be redirected back to after payment
  var DOMAIN = window.location.hostname;
  // Replace with a SKU for your own product (created either in the Stripe Dashboard or with the API)
  var SUBSCRIPTION_YEARLY_PLAN_ID = "plan_HBLfmTZ415bQs8";
  var SUBSCRIPTION_6MONTH_PLAN_ID = "plan_HBLgu7kUCybVKs";
  var SUBSCRIPTION_QUARTERLY_PLAN_ID = "plan_HBLiwxfPHtSd1J";
  var SUBSCRIPTION_MONTHLY_PLAN_ID = "plan_HBLhvOBXUOLqHp";

  if (PUBLISHABLE_KEY === "pk_1234") {
    console.log(
      "Replace the hardcoded publishable key with your own publishable key: https://dashboard.stripe.com/test/apikeys"
    );
  }

  if (
    SUBSCRIPTION_BASIC_PLAN_ID === "plan_1234" ||
    SUBSCRIPTION_PRO_PLAN_ID === "plan_5678"
  ) {
    console.log(
      "Replace the hardcoded plan ID with your own plan: https://stripe.com/docs/api/plans"
    );
  }

  var stripe = Stripe(PUBLISHABLE_KEY);

  // Handle any errors from Checkout
  var handleResult = function(result) {
    if (result.error) {
      var displayError = document.getElementById("error-message");
      displayError.textContent = result.error.message;
    }
  };

  var redirectToCheckout = function(planId) {
    // Make the call to Stripe.js to redirect to the checkout page
    // with the current quantity
    stripe
      .redirectToCheckout({
        items: [{ plan: planId, quantity: 1 }],
        successUrl:
          "https://" +
          DOMAIN +
          "/success.html?session_id={CHECKOUT_SESSION_ID}",
        cancelUrl: "https://" + DOMAIN + "/canceled.html",
      })
      .then(handleResult);
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
      <SEO title="Home" />
      <div className="w-full">
        <div
          className="bg-green-200
        lg:h-hero
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col"
        >
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
            <h1>Drive, by Nemea</h1>
            <div class="relative z-0">
              <div class="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div>
              <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="relative lg:grid lg:grid-cols-10">
                  <div class="max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-4">
                    <div class="relative z-10 rounded-lg shadow-xl">
                      <div>
                        <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-teal-400"></div>
                        <div class="absolute inset-x-0 top-0 transform translate-y-px">
                          <div class="flex justify-center transform -translate-y-1/2">
                            <span class="inline-flex rounded-full bg-teal-400 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                              Get both packages
                            </span>
                          </div>
                        </div>
                        <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                          <div>
                            <p class="text-center text-lg leading-7 font-semibold font-display text-teal-500 uppercase tracking-widest">
                              Bundle
                            </p>
                            <h2 class="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900 sm:-mx-6">
                              Application UI + Marketing
                            </h2>
                            <div class="mt-4 flex items-center justify-center font-display">
                              <span class="-ml-8 text-right text-2xl leading-8 font-semibold text-gray-400 tracking-wide line-through sm:text-3xl sm:leading-9">
                                $298
                              </span>
                              <span class="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900 sm:text-7xl">
                                <span class="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                                  $
                                </span>
                                <span>249</span>
                              </span>
                              <span class="text-2xl leading-8 font-semibold text-gray-400 tracking-wide sm:text-3xl sm:leading-9">
                                USD
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                          <ul>
                            <li class="flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                All application UI components
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                All marketing components
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Lifetime access
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Use on unlimited projects
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500 whitespace-no-wrap">
                                Free updates
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500 whitespace-no-wrap">
                                Community access
                              </p>
                            </li>
                          </ul>
                          <div class="mt-10">
                            <div class="rounded-lg shadow-md">
                              <a
                                href="https://gum.co/Cfrhr"
                                data-gumroad-single-product="true"
                                class="block w-full text-center rounded-lg bg-gray-800 px-6 py-4 text-xl leading-6 font-semibold font-display text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                                target="_blank"
                              >
                                Buy Early Access
                              </a>
                            </div>
                            <p class="mt-6 text-center text-base leading-6 font-medium text-gray-900">
                              Buying for your team?
                              <a
                                href="#team-pricing"
                                class="text-teal-500 font-semibold hover:underline"
                              >
                                View team pricing →
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-3">
                    <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                      <div class="flex-1 flex flex-col">
                        <div class="bg-white px-6 pt-12 pb-10">
                          <div>
                            <h2 class="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900">
                              Application UI
                            </h2>
                            <div class="mt-4 flex items-center justify-center font-display">
                              <span class="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900">
                                <span class="mt-2 mr-2 text-4xl">$</span>
                                <span>149</span>
                              </span>
                              <span class="text-2xl leading-8 font-semibold text-gray-400 tracking-wide">
                                USD
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                          <ul>
                            <li class="flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                All application UI components
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Lifetime access
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Use on unlimited projects
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Free updates
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Community access
                              </p>
                            </li>
                          </ul>
                          <div class="mt-8">
                            <div class="rounded-lg shadow-md">
                              <a
                                href="https://gum.co/KXjZm"
                                data-gumroad-single-product="true"
                                class="block w-full text-center rounded-lg bg-white px-6 py-3 text-base leading-6 font-semibold font-display text-teal-600 hover:text-teal-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                                target="_blank"
                              >
                                Buy Early Access
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-8 lg:col-end-11 lg:row-start-2 lg:row-end-3">
                    <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                      <div class="flex-1 flex flex-col">
                        <div class="bg-white px-6 pt-12 pb-10">
                          <div>
                            <h2 class="mt-2 text-center text-3xl leading-9 font-semibold font-display text-gray-900">
                              Marketing
                            </h2>
                            <div class="mt-4 flex items-center justify-center font-display">
                              <span class="px-3 flex items-start text-6xl leading-none tracking-tight font-medium text-gray-900">
                                <span class="mt-2 mr-2 text-4xl">$</span>
                                <span>149</span>
                              </span>
                              <span class="text-2xl leading-8 font-semibold text-gray-400 tracking-wide">
                                USD
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                          <ul>
                            <li class="flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                All marketing components
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Lifetime access
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Use on unlimited projects
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Free updates
                              </p>
                            </li>
                            <li class="mt-4 flex items-start">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-6 w-6 text-teal-500"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                                Community access
                              </p>
                            </li>
                          </ul>
                          <div class="mt-8">
                            <div class="rounded-lg shadow-md">
                              <a
                                href="https://gum.co/jYnNI"
                                data-gumroad-single-product="true"
                                class="block w-full text-center rounded-lg bg-white px-6 py-3 text-base leading-6 font-semibold font-display text-teal-600 hover:text-teal-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                                target="_blank"
                              >
                                Buy Early Access
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query {
    navInfo {
      data
    }
    categoryInfo {
      data {
        name
        image
        itemCount
      }
    }
    inventoryInfo {
      data {
        image
        name
        categories
        description
        id
      }
    }
  }
`;

export default Home;
