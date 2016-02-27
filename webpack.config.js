path = require('path');
var bourbon = require('node-bourbon');


var webpackConf = {
  context: __dirname + '/app/assets/javascripts',
  entry: {
    "dist/new_recipe": [
      "./recipes/new.js"
    ],
    "dist/recipes": [
      "./recipes/index.js"
    ]
  },
  output: {
    path: path.join(__dirname, "./app/assets/javascripts"),
    filename: "[name].js",
    publicPath: "http://localhost:8080/assets"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"]},
      { test: /\.sass$/, loader: "style!css!sass?indentedSyntax&includePaths[]=" + bourbon.includePaths },
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon.includePaths },
      { test: /\.css$/, loader: "style!css"},
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'url-loader'}
    ]
  }
};

module.exports = webpackConf;