const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.set('port', PORT);
app.listen(PORT);
console.log(`Listening on port ${app.get('port')}`);

module.exports = app;
