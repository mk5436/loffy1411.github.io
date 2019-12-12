const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader')
const _ = require('lodash')

module.exports = function (env, { mode = 'development' }) {
  const { production, development } = { [mode]: true }
  const base = opt => _.mergeWith({
    mode,
    devtool: production ? false : 'inline-source-map',
    module: {
      rules: [
        { test: /\.vue$/, loader: 'vue-loader' },
        { test: /\.scss$/, loader: 'css-loader!sass-loader' },
        { test: /\.css$/, loader: 'css-loader' },
        { test: /\.(png|woff2|svg|jpg|gif)$/, loader: 'file-loader?outputPath=files/' }
      ],
    },
    node: { fs: 'empty' },
    plugins: [ production && new CleanWebpackPlugin(), new VueLoaderPlugin() ].filter(x => x),
    performance: { maxAssetSize: 1000 * 1024, maxEntrypointSize: 500 * 1024 },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build')
    }
  }, opt, (o, n) => _.isArray(o) ? o.concat(n).filter(x => x) : n)
  return [
    base({
      entry: {
        background: './background.js',
      },
      plugins: [
        development && new ChromeExtensionReloader(),
        new CopyWebpackPlugin([
          './manifest.json',
          { from: './assets/', to: path.resolve(__dirname, 'build', 'assets'), toType: 'dir' },
          { from: './icons/', to: path.resolve(__dirname, 'build', 'icons'), toType: 'dir' }
        ]),
      ],
    }),
    base({
      entry: {
        popup: './popup.js',
      },
      plugins: [new CopyWebpackPlugin(['./popup.html'])]
    })
  ]
}
