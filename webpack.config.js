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
    // devtool: "source-map"
    module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"

            },
            // {
            //   test: /\.js$/,
            //   enforce: 'pre',
            //   use: ['source-map-loader'],
            // },
            // options: {
            //   presets: ['@babel/preset-react']
            // }
          },
        ],
    }
}

