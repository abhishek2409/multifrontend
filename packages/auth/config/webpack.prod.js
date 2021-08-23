const { merge } = require("webpack-merge");
const ModuleFed = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: '/auth/latest/'
  },
  plugins: [
    new ModuleFed({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthRoot": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
