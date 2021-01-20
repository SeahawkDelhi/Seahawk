var AdvUniRe = require('../mdmodels/AdvanceUniformRemark.js');

exports = module.exports = function (router) {
    //Insert
    //http://localhost:3000/api/InsertAdvanceUniformRemark
    //{ "AreaCode":"AB","AreaCodeName":"Delhi","IsActive":"true"}
    router.post('/InsertAdvanceUniformRemark', function (req, res, next) {
        AdvUniRe.create(req.body, function (err, adUnRe) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(adUnRe);
        });
    });
    // //http://localhost:3000/api/GetAllAdvanceUniformRemark
    router.get('/GetAllAdvanceUniformRemark', function (req, res) {
        var mysort = { AId: 1 };
        AdvUniRe.find(function (err, adUnRe) {
            if (err) return next(err);
            res.json(adUnRe);
        }).sort(mysort);
    });

    // //To Filter with values
    // //http://localhost:3000/api/GetSingleAdvanceUniformRemark?AreaCode=AS
    router.get('/GetSingleAdvanceUniformRemark', function (req, res, next) {
        var filterQuery = { AURId: req.query.AURId };
        //Regular expressions can only be used to query strings.
        //Find Area Code where the Area Code starts with the letter "D":   
        //var filterQuery = { AreaCode: /^D/ };
        AdvUniRe.find(filterQuery, function (err, adUnRe) {
            if (err) return next(err);
            res.json(adUnRe);
        });
    });

    // //Delete Values
    router.get('/DeletAdvanceUniformRemark', function (req, res, next) {
        var filterQuery = { AURId: req.query.AURId };
        AdvUniRe.deleteOne(filterQuery, function (err, adUnRe) {
            if (err) return next(err);
            res.json(adUnRe);
        });
    });
    // //Update Values
    // //http://localhost:3000/api/UpdateAdvanceUniformRemark?AreaCode=AS&AreaCodeName=Japan&IsActive=false
    // //First create query to fetch the value then create query to update value 
    router.get('/UpdateAdvanceUniformRemark', function (req, res, next) {
        var filterQuery = { AId: req.query.AId };
        var updateValues = {
            $set: {
                "GId": req.query.GId,
                "AllottedAmount": req.query.AllottedAmount,
                "ReceivedAmount": req.query.ReceivedAmount,
                "AmountType": req.query.AmountType,
                "ReasonRequest": req.query.ReasonRequest,
                "GooglePhotoUrl": req.query.GooglePhotoUrl,
                "IsActive": req.query.IsActive,
                TransactionDate: Date.now()
            }
        };
        AdvUniRe.updateOne(filterQuery, updateValues, function (err, adUnRe) {
            if (err) return next(err);
            res.json(adUnRe);
        });
    });
}