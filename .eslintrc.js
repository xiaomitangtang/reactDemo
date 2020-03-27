module.exports = {
  root: true,
  extends: "standard",
  parserOptions: {
    "sourceType": 'module' // 按照模块的方式解析
  },
  "parser": "babel-eslint",
  env: {
    "browser": true, // 开发环境配置表示可以使用浏览器的方法
    "node": true, //
    "es6": true,
  },
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "error", // 检查 effect 的依赖
    "no-unused-vars": [0],
    "no-multiple-empty-lines": [0],
    "prefer-const": [0],
    "semi": [0],
    "eol-last": [0],
    "space-before-function-paren": [0],
    "lines-between-class-members": [0],
    "quotes": [0],
    "generator-star-spacing": [0],
    "import/first": [0],
    "comma-dangle": [0],
    "no-case-declarations": [0],
    "indent": [0],
    "no-trailing-spaces": [0],
    "spaced-comment": [0],
    "object-property-newline": [0],
    "padded-blocks": [0],
    "operator-linebreak": [0],
    "comma-spacing": [0],
    "no-func-assign": [0]
  }

}