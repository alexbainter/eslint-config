'use strict';

const config = {
  extends: [
    './browser',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = config;
