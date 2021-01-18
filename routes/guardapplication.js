var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//var advanceUniformRemark  = require('../mdmodels/AdvanceUniformRemark.js');
var AreaCodes = require('../mdmodels/AreaCodes.js');
// var guardDetails  = require('../mdmodels/GuardDetails.js');
// var leaveDatails  = require('../mdmodels/LeaveDatails.js');
// var salary  = require('../mdmodels/Salary.js');
// var timeSheets  = require('../mdmodels/TimeSheets.js');
// var uniformDistributors  = require('../mdmodels/UniformDistributors.js');
//var Sales = require('../mdmodels/Sales.js');
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

//AreaCodescd 
//Insert
//http://localhost:3000/api/InsertAreaCodes
//{ "AreaCode":"AB","AreaCodeName":"Delhi","IsActive":"true"}
router.post('/InsertAreaCodes', function (req, res, next) {
    AreaCodes.create(req.body, function (err, areacodes) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(areacodes);
    });
});
//http://localhost:3000/api/GetAllAreaCodes
router.get('/GetAllAreaCodes', function (req, res) {
    var mysort = { AId: 1 };
    AreaCodes.find(function (err, areacodes) {
        if (err) return next(err);
        res.json(areacodes);
    }).sort(mysort);
});

//To Filter with values
//http://localhost:3000/api/GetSingleAreaCodes?AreaCode=AS
router.get('/GetSingleAreaCodes', function (req, res, next) {
    var filterQuery = { AreaCode: req.query.AreaCode };
    //Regular expressions can only be used to query strings.
    //Find Area Code where the Area Code starts with the letter "D":   
    //var filterQuery = { AreaCode: /^D/ };
    AreaCodes.find(filterQuery, function (err, areacodes) {
        if (err) return next(err);
        res.json(areacodes);
    });
});

//Delete Values
router.get('/DeletAreaCodes', function (req, res, next) {
    var filterQuery = { AreaCode: req.query.AreaCode };    
    AreaCodes.deleteOne(filterQuery, function (err, areacodes) {
        if (err) return next(err);
        res.json(areacodes);
    });
});
//Update Values
//http://localhost:3000/api/UpdateAreaCodes?AreaCode=AS&AreaCodeName=Japan&IsActive=false
//First create query to fetch the value then create query to update value 
router.get('/UpdateAreaCodes', function (req, res, next) {
    var filterQuery = { AreaCode: req.query.AreaCode };
    var updateValues = { $set: { AreaCode: req.query.AreaCode, AreaCodeName: req.query.AreaCodeName,IsActive: req.query.IsActive,TransactionDate: Date.now()} };    
    AreaCodes.updateOne(filterQuery, updateValues, function (err, areacodes) {
        if (err) return next(err);
        res.json(areacodes);
    });
});
//End AreaCodes

//Distributors 
//Insert
//http://localhost:3000/api/InsertAreaCodes
//{ "AreaCode":"AB","AreaCodeName":"Delhi","IsActive":"true"}
router.post('/InsertUniformDistributors', function (req, res, next) {
    AreaCodes.create(req.body, function (err, areacodes) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(areacodes);
    });
});
//http://localhost:3000/api/GetAllAreaCodes
router.get('/GetAllUniformDistributors', function (req, res) {
    var mysort = { AId: 1 };
    AreaCodes.find(function (err, areacodes) {
        if (err) return next(err);
        res.json(areacodes);
    }).sort(mysort);
});

//To Filter with values
//http://localhost:3000/api/GetSingleAreaCodes?AreaCode=AS
router.get('/GetSingleUniformDistributors', function (req, res, next) {
    var filterQuery = { AreaCode: req.query.AreaCode };
    //Regular expressions can only be used to query strings.
    //Find Area Code where the Area Code starts with the letter "D":   
    //var filterQuery = { AreaCode: /^D/ };
    AreaCodes.find(filterQuery, function (err, areacodes) {
        if (err) return next(err);
        res.json(areacodes);
    });
});

//Delete Values
router.get('/DeletUniformDistributors', function (req, res, next) {
    var filterQuery = { AreaCode: req.query.AreaCode };    
    AreaCodes.deleteOne(filterQuery, function (err, areacodes) {
        if (err) return next(err);
        res.json(areacodes);
    });
});
//Update Values
//http://localhost:3000/api/UpdateAreaCodes?AreaCode=AS&AreaCodeName=Japan&IsActive=false
//First create query to fetch the value then create query to update value 
router.get('/UpdateUniformDistributors', function (req, res, next) {
    var filterQuery = { AreaCode: req.query.AreaCode };
    var updateValues = { $set: { AreaCode: req.query.AreaCode, AreaCodeName: req.query.AreaCodeName,IsActive: req.query.IsActive,TransactionDate: Date.now()} };    
    AreaCodes.updateOne(filterQuery, updateValues, function (err, areacodes) {
        if (err) return next(err);
        res.json(areacodes);
    });
});
//End Distributors



module.exports = router;
