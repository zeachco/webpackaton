'use strict';
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const dir = p => path.join(process.cwd(), p);

module.exports = port => {
  const projectConfig = require(dir('webpack.config.js'));
  let config = {
    entry: dir('main.js'),
    output: {
      path: process.cwd(),
      filename: 'bundle.js'
    },
    module: {
      loaders: []
    }
  };

  config.module.loaders.push(...projectConfig.module.loaders);
  
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, config);
  server.listen(port);
  console.log('serving on port ' + port);
};
