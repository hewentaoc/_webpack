const path = require('path');
let webpackDev = require('./webpack.dev.config.js');
let webpackBase = require('./webpack.base.config.js');
let webpackProd = require('./webpack.prod.config.js');

// npx webpack --env prod
module.exports = env => {
  console.log('NODE_ENV: ', env); // 'local'
  if(env && env.prod){//生产环境
    return {
        ...webpackBase,
        ...webpackProd
    }
  }else{
    return {
        ...webpackBase,
        ...webpackDev
    }
  }
};