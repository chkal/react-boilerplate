var path = require("path");

module.exports = {
  entry: {
    simple: "./src/main/javascript/simple/simple.tsx"
  },
  output: {
    path: path.resolve(__dirname, "target/generated-web-resources/assets/"),
    filename: "[name].js"
  },
  resolve: {
    modules: [
      "node_modules",
      "src/main/javascript"
    ]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: "ts-loader"
    }]
  },
  devServer: {
    publicPath: "/react-boilerplate/assets/",
    proxy: {
      "*": {
        target: 'http://localhost:8080'
      }
    }
  }
};
