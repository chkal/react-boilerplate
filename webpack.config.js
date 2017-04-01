module.exports = {
  entry: {
    index: "./src/main/javascript/index.tsx"
  },
  output: {
    path: "./target/generated-web-resources/assets/",
    filename: "[name].js"
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
      "src/main/javascript"
    ]
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: "ts-loader"
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
