const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development', //development or production
    entry: {
        main: path.join(__dirname,'/client/src/index.jsx')
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,'/client/dist')
    },
    module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"

            },
            // options: {
            //   presets: ['@babel/preset-react']
            // }
          },
        ],
    }
}