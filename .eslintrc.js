module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // or a newer version like 2021 or 2022 if needed
    sourceType: 'module', // set to 'module' if you use ES modules
  },
  extends: 'airbnb-base',
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    indent: 'off',
  },
  ignorePatterns: ['node_modules/', 'dist/', 'public/', 'static/'],
};
