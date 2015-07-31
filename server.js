var app = require('./server-config.js');

// DEFAULT PORT FOR LOCAL DEV, ENV.PORT USED IN PRODUCTION
var port = process.env.PORT || 4568;

app.listen(port);

console.log('Server now listening on port ' + port);
