const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
    proxy: {
      "^/bsu": { target: "http://echo.uz" },
    },
  },

  pwa: {
    name: "Расписание",
    themeColor: null,
    msTileColor: "#ffffff",
    manifestOptions: {
      background_color: "#ffffff",
      theme_color: "#f5f5f5",
    },
  },
  configureWebpack: {
    optimization: {
      minimize: false,
    },
  },

  // publicPath: process.env.NODE_ENV === "production" ? "/test-build/" : "/",
});
