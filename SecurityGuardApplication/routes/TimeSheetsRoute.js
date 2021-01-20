var TimeSheets = require('../mdmodels/TimeSheets.js');

exports = module.exports = function (router) {
    //Insert
    //http://localhost:3000/api/InsertTimeSheets
    // {
    //     "GId":"1",
    //     "AreaCode1": "DL",
    //     "AreaCode2": "MA",
    //     "Month": "2020",        
    //     "Year": "12",        
    //     "Date": "01",        
    //     "IsActive": "true"
    // }
    router.post('/InsertTimeSheets', function (req, res, next) {
        TimeSheets.create(req.body, function (err, timeSheets) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(timeSheets);
        });
    });
    // //http://localhost:3000/api/GetAllGuardTimeSheet
    router.get('/GetAllGuardTimeSheet', function (req, res) {
        var mysort = { GId: 1 };
        var filterQuery = { Year: req.query.Year, Month: req.query.Month };
        TimeSheets.find(function (err, timeSheets) {
            if (err) return next(err);
            res.json(timeSheets);
        }).sort(mysort);
    });

    // //To Filter with values
    // //http://localhost:3000/api/GetSingleGuardTimeSheets?AreaCode=AS
    router.get('/GetSingleGuardTimeSheets', function (req, res, next) {
        var filterQuery = { GId: req.query.GId, Year: req.query.Year, Month: req.query.Month };
        //Regular expressions can only be used to query strings.
        //Find Area Code where the Area Code starts with the letter "D":   
        //var filterQuery = { AreaCode: /^D/ };
        TimeSheets.find(filterQuery, function (err, timeSheets) {
            if (err) return next(err);
            res.json(timeSheets);
        });
    });

    // //Delete Values
    router.get('/DeletTimeSheets', function (req, res, next) {
        var filterQuery = { GId: req.query.GId };
        TimeSheets.deleteOne(filterQuery, function (err, timeSheets) {
            if (err) return next(err);
            res.json(timeSheets);
        });
    });
    // //Update Values
    // //http://localhost:3000/api/UpdateTimeSheets?AreaCode=AS&AreaCodeName=Japan&IsActive=false
    // //First create query to fetch the value then create query to update value 
    router.get('/UpdateTimeSheets', function (req, res, next) {
        var filterQuery = { GId: req.query.GId };
        var updateValues = {
            $set: {
                GId: req.query.GId,
                AreaCode1: req.query.AreaCode1,
                AreaCode2: req.query.AreaCode2,
                Month: req.query.Month,
                Year: req.query.Year,
                Date: req.query.Date,
                IsActive: req.query.IsActive,
                TransactionDate: Date.now()
            }
        };
        TimeSheets.updateOne(filterQuery, updateValues, function (err, timeSheets) {
            if (err) return next(err);
            res.json(timeSheets);
        });
    });
}