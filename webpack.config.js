var path = require("path");

module.exports = {
  entry: {
    simple: "./src/main/javascript/simple/simple.tsx",
    hello: "./src/main/javascript/hello/index.tsx",
    crud: "./src/main/javascript/crud/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "target/generated-web-resources/assets/"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [
      ".js", 
      ".json",
      ".ts",
      ".tsx"
    ],
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
