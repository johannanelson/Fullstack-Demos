const path = require("path")

module.exports = {
  // 1. Mode
  mode: "development",
  // 2. Entry
  entry: "./src/index.js",
  // 3. Output
  output: {
    path: path.join(__dirname, "/public"),
   // similar to path: "./common-js-modules/ajax-demo/public"
   filename: "bundle.js"
  }
}
