module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      } 
    ]
  },
  devServer: {
    allowedHosts: [
      'descolado-forum-web-components.herokuapp.com',
      'forum.d9a.com.br'
    ],
    port: process.env.PORT || 3333
  },
};
