path = require('path');
var bourbon = require('node-bourbon');


var outputPublicPath = undefined;
if (process.env.RAILS_ENV == 'production') {
  outputPublicPath = '/assets/';
} else {
  outputPublicPath = "http://localhost:8080/assets";
}

var webpackConf = {
  context: __dirname + '/app/assets/javascripts',
  entry: {
    "dist/recipes": [
      "./recipes/new.js"
    ]
  },
  output: {
    path: path.join(__dirname, "./app/assets/javascripts"),
    filename: "[name].js",
    publicPath: outputPublicPath
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