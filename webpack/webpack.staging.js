const webpack = require('webpack');

module.exports = {
  mode: 'development',
  //   devtool: 'cheap-mopdule-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('staging'),
    }),
  ],
};
