var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(4000)

// socket io
io.on('connection', function (socket) {
    socket.on('newdata', function (data) {
        io.emit('new-data', { data: data });
    });
    socket.on('updatedata', function (data) {
        io.emit('update-data', { data: data });
    });
});

require('./AreaCodeRoute.js')(router);
require('./DistributorsRoute.js')(router);
require('./AdUnReRoute.js')(router);
require('./TimeSheetsRoute.js')(router);
require('./LeaveDetailsRoute.js')(router);
require('./SalaryRoute.js')(router);
require('./GuardDetailsRoute.js')(router);
module.exports = router;
