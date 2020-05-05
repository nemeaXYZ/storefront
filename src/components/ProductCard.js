/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

function ProductCard(image) {
  return (
    <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
      <div class="px-4 py-2">
        <h1 class="text-gray-900 font-bold text-3xl uppercase">
          Drive, by Nemea
        </h1>
        <p class="text-gray-600 text-sm mt-1"></p>
      </div>
      <img
        class="h-56 w-full object-cover mt-2"
        src={image.image}
        alt="Drive, by Nemea"
      />
      <div class="flex items-center justify-between px-4 py-2 bg-gray-900"></div>
    </div>
  );
}

export default ProductCard;
