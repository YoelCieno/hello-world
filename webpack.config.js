const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  resolve: {
    alias: {
      angular: path.resolve(__dirname, "node_modules/angular")
    },
    module: {
      rules: [{
          test: /\.scss$/,
          use: [
              // fallback to style-loader in development
              process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader", // compiles Sass to CSS, using Node Sass by default
              {
                loader: 'sass-resources-loader',
                options: {
                  // Provide path to the file/s with resources
                  resources: require(path.join(process.cwd(), "src/app/styles/utils.js")),
                },
              },              
          ]
      }]
    },  
    plugins: [
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
      })
    ]       
  }
};
