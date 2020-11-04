'use strict';

const config = {
  extends: ['./base'],
  env: {
    browser: true,
    node: false,
  },
  parserOptions: {
    sourceType: 'module',
  },
};

module.exports = config;
