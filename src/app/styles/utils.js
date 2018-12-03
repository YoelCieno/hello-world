// utils.js
const path = require("path");
const resources = ['src/styles.scss'];


module.exports = resources.map(file => path.resolve(__dirname, file));