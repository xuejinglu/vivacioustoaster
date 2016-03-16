var express = require('express');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(1337);


module.exports = app;
