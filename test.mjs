/**
 * Make sure to run `next dev` first.
 */

/**
 * Import the Webpack runtime.
 */
const { default: __webpack_require__ } = await import('./.next/server/webpack-runtime.js')
console.log('Before SES:', { __webpack_require__ })

/**
 * Load SES and observe how it has modified __webpack_require__.
 */
await import('@agoric/install-ses')
console.log('After SES:', { __webpack_require__ })

// const doc = __webpack_require__('./.next/server/pages/_document.js')
// console.log(doc)