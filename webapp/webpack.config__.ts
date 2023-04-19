module.exports = {
  // optimization: {
  //   minimize: false,
  // },
  // output: {
  //   filename: "index.js",
  //   libraryTarget: "umd",
  //   globalObject: "this",
  //   path: path.resolve("./build/")
  // },
  // plugins: [
  //   new CleanWebpackPlugin(),
  // ],
  externals: [
    "@inrupt/solid-client",
    "@inrupt/solid-client-authn-browser",
  ]
};