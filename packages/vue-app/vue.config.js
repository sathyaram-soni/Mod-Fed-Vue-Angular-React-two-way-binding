const path = require("path");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  publicPath: "http://localhost:8080/",
  outputDir: path.resolve(__dirname, "dist/"),
  css: {
    sourceMap: true,
  },
  lintOnSave: "error",
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {},
  },
  devServer: {
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
  },
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "vueTodo",
        filename: "remoteEntry.js",
        remotes: {
          angularHub: "angularHub@http://localhost:4200/remoteEntry.js",
          reactCalc: "reactCalc@http://localhost:3000/remoteEntry.js",
        },
        exposes: {
          "./app": "./src/bootloader.js",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
};
