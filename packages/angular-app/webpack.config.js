const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "angularHub",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "angularHub",
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./src/bootloader.js",
      },

      remotes: {
        vueTodo: "vueTodo@http://localhost:8080/remoteEntry.js",
        reactCalc: "reactCalc@http://localhost:3000/remoteEntry.js",
      },

      shared: {
        "@angular/core": { eager: true, singleton: true },
        "@angular/common": { eager: true, singleton: true },
        "@angular/router": { eager: true, singleton: true },
        "@ngxs/store": { singleton: true, eager: true },
        "mdmf-shared": { singleton: true, eager: true },
      },
    }),
  ],
};
