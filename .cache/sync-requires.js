const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/u6032949/Documents/Nemea/Development/storefront/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/u6032949/Documents/Nemea/Development/storefront/src/pages/404.js"))),
  "component---src-pages-admin-js": hot(preferDefault(require("/Users/u6032949/Documents/Nemea/Development/storefront/src/pages/admin.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/Users/u6032949/Documents/Nemea/Development/storefront/src/pages/cart.js"))),
  "component---src-pages-checkout-js": hot(preferDefault(require("/Users/u6032949/Documents/Nemea/Development/storefront/src/pages/checkout.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/u6032949/Documents/Nemea/Development/storefront/src/pages/index.js"))),
  "component---src-templates-category-view-js": hot(preferDefault(require("/Users/u6032949/Documents/Nemea/Development/storefront/src/templates/CategoryView.js"))),
  "component---src-templates-item-view-js": hot(preferDefault(require("/Users/u6032949/Documents/Nemea/Development/storefront/src/templates/ItemView.js")))
}

