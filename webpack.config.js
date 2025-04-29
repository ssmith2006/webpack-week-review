import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  plugins: [new HtmlWebpackPlugin({template: "./index.html",})],
  output: {filename: "bundle.js",
    path: path.resolve(__dirname, "dist") 
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(?:js|mjs|cdj)$/, loader: "babel-loader",
        exclude: /node_modules/
      },
    ],
  },
};
