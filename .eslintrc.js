module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'react', 'react-native'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    es6: true,
  },
};
