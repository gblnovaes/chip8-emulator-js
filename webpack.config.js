const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "chip8bundle.js",
    path: path.resolve(__dirname, "./public/js"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
