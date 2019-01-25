# react-boilerplate [![CircleCI](https://circleci.com/gh/HyunmoAhn/react-boilerplate.svg?style=shield&circle-token=6b59fb0a576e6a171d29b51dd2b692d617ec7260)](https://circleci.com/gh/HyunmoAhn/react-boilerplate)
start kit that project using react 

# Sequence
make `.gitignore` file
```
yarn init
yarn add react react-dom prop-types
yarn add -D webpack webpack-dev-server html-webpack-plugin cross-env
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader react-hot-loader
yarn add -D style-loader css-loader postcss-loader resolve-url-loader sass-loader node-sass sass-resources-loader
yarn add -D file-loader

yarn add react-router
yarn add --dev webpack-merge
yarn add redux redux-actions react-redux reselect
yarn add --dev redux-devtools-extension
yarn add immutable redux-immutable
yarn add redux-thunk axios
```

`eslint`
```
yarn add --dev eslint eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
yarn add --dev husky lint-staged
```
make `.esintrc` and `.eslintignore` file.

# Technology

```
react: 16.3.0
react-dom: 16.3.0
react-router: 4.2.0
```
