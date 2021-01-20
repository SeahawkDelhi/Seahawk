var UniformDistributors  = require('../mdmodels/UniformDistributors.js');
module.exports = function (router) {

//http://localhost:3000/api/InsertUniformDistributors
// {
//     "GId":"1",
//     "AllottedAmount": "100",
//     "ReceivedAmount": "5",
//     "AmountType": "Advance",    
//     "ReasonRequest": "He took for marriage",
//     "GooglePhotoUrl": "Http://google.com/abc.pnc",    
//     "IsActive": "true"
// }
router.post('/InsertUniformDistributors', function (req, res, next) {
    UniformDistributors.create(req.body, function (err, uniformDistributors) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(uniformDistributors);
    });
});
http://localhost:3000/api/GetAllUniformDistributors
router.get('/GetAllUniformDistributors', function (req, res) {
    var mysort = { UDId: 1 };
    UniformDistributors.find(function (err, uniformDistributors) {
        if (err) return next(err);
        res.json(uniformDistributors);
    }).sort(mysort);
});

//To Filter with values
//http://localhost:3000/api/GetSingleUniformDistributors?PurchaseStockType=shirtpaint
router.get('/GetSingleUniformDistributors', function (req, res, next) {
    var filterQuery = { AreaCode: req.query.PurchaseStockType };
    //Regular expressions can only be used to query strings.
    //Find Area Code where the Area Code starts with the letter "D":   
    //var filterQuery = { AreaCode: /^D/ };
    UniformDistributors.find(filterQuery, function (err, uniformDistributors) {
        if (err) return next(err);
        res.json(uniformDistributors);
    });
});

//Delete Values
router.get('/DeletUniformDistributors', function (req, res, next) {
    var filterQuery = { AreaCode: req.query.PurchaseStockType };
    UniformDistributors.deleteOne(filterQuery, function (err, uniformDistributors) {
        if (err) return next(err);
        res.json(uniformDistributors);
    });
});
//Update Values
//http://localhost:3000/api/UpdateUniformDistributors?AreaCode=AS&AreaCodeName=Japan&IsActive=false
//First create query to fetch the value then create query to update value 
router.get('/UpdateUniformDistributors', function (req, res, next) {
    var filterQuery = { AId: req.query.UDId };
    var updateValues = { $set: {         
        "DistributorName":req.query.DistributorName,
        "PurchaseStockType": req.query.PurchaseStockType,
        "TotalPurchaseStock": req.query.TotalPurchaseStock,
        "ToatlAmount": req.query.ToatlAmount,    
        "OneItemAmount": req.query.OneItemAmount,
        "Balance": req.query.Balance,
        "GuardDistributeCount": req.query.GuardDistributeCount,
        "GooglePhotoUrl": req.query.Photo,
        "IsActive": req.query.IsActive, 
        TransactionDate: Date.now() 
    } };
    UniformDistributors.updateOne(filterQuery, updateValues, function (err, uniformDistributors) {
        if (err) return next(err);
        res.json(uniformDistributors);
    });
});


}