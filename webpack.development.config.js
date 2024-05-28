const path = require('path');

module.exports = {
  mode: 'development',
  devServer: { watchFiles: path.join(__dirname, 'src'), port: 8000 },
};
