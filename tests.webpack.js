// tests.webpack.js
const context = require.context('./client', true, /-test\.jsx?$/);
context.keys().forEach(context);
