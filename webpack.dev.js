const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/templates/template.html"],
    hot: true, // Enables Hot Module Replacement
    open: true, // Automatically opens the browser
    static: './dist',
  },
});
