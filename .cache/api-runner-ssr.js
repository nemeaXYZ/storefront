var plugins = [{
      plugin: require('/Users/u6032949/Documents/Nemea/Development/storefront/node_modules/gatsby-plugin-linkedin-insight/gatsby-ssr'),
      options: {"plugins":[],"partnerId":"2140140","includeInDevelopment":true},
    },{
      plugin: require('/Users/u6032949/Documents/Nemea/Development/storefront/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/u6032949/Documents/Nemea/Development/storefront/src/layouts/baseLayout.js"},
    },{
      plugin: require('/Users/u6032949/Documents/Nemea/Development/storefront/node_modules/gatsby-plugin-facebook-pixel/gatsby-ssr'),
      options: {"plugins":[],"pixelId":"2287232254912143"},
    },{
      plugin: require('/Users/u6032949/Documents/Nemea/Development/storefront/node_modules/gatsby-plugin-stripe/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/u6032949/Documents/Nemea/Development/storefront/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/u6032949/Documents/Nemea/Development/storefront/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Drive, by Nemea","short_name":"Nemea","start_url":"/","background_color":"#ffc93c","theme_color":"#ffc93c","display":"minimal-ui","icon":"src/images/icon.png"},
    },{
      plugin: require('/Users/u6032949/Documents/Nemea/Development/storefront/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
