var AreaCodes = require('../mdmodels/AreaCodes.js');

exports = module.exports = function (router) {
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
    // //http://localhost:3000/api/GetAllAreaCodes
    router.get('/GetAllAreaCodes', function (req, res) {
        var mysort = { AId: 1 };
        AreaCodes.find(function (err, areacodes) {
            if (err) return next(err);
            res.json(areacodes);
        }).sort(mysort);
    });

    // //To Filter with values
    // //http://localhost:3000/api/GetSingleAreaCodes?AreaCode=AS
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

    // //Delete Values
    router.get('/DeletAreaCodes', function (req, res, next) {
        var filterQuery = { AreaCode: req.query.AreaCode };
        AreaCodes.deleteOne(filterQuery, function (err, areacodes) {
            if (err) return next(err);
            res.json(areacodes);
        });
    });
    // //Update Values
    // //http://localhost:3000/api/UpdateAreaCodes?AreaCode=AS&AreaCodeName=Japan&IsActive=false
    // //First create query to fetch the value then create query to update value 
    router.get('/UpdateAreaCodes', function (req, res, next) {
        var filterQuery = { AId: req.query.AId };
        var updateValues = { $set: { AreaCode: req.query.AreaCode, AreaCodeName: req.query.AreaCodeName, IsActive: req.query.IsActive, TransactionDate: Date.now() } };
        AreaCodes.updateOne(filterQuery, updateValues, function (err, areacodes) {
            if (err) return next(err);
            res.json(areacodes);
        });
    });
}