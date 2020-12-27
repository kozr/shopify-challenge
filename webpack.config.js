/* eslint-disable @typescript-eslint/no-var-requires */
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const styledComponentsTransformer = createStyledComponentsTransformer()

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: 'file-loader',
        type: 'asset/resource',
      },
      {
        test: /\.(js)$/,
        enforce: 'pre',
        use: 'source-map-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
}
