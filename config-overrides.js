const {
  override,
  addWebpackAlias,
  fixBabelImports
} = require("customize-cra");

const path = require("path");

module.exports = override(
  fixBabelImports("antd-mobile", {
    libraryName: "antd-mobile",
    style: 'css'
  }),
  addWebpackAlias({
    "styles": path.resolve(__dirname, "./src/assets/styles"),
    "images": path.resolve(__dirname, "./src/assets/images"),
    "components": path.resolve(__dirname, "./src/components"),
    "pages": path.resolve(__dirname, "./src/pages"),
    "utils": path.resolve(__dirname, "./src/utils"),
    "store": path.resolve(__dirname, "./src/store"),
  })
);