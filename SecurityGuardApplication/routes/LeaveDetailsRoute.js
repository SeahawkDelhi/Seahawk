var LeaveDatails = require('../mdmodels/LeaveDatails.js');

exports = module.exports = function (router) {
    // //Insert
    // //http://localhost:3000/api/InsertLeave
    // // {
    // //     "GId":"1",
    // //     "StartDay": "01",
    // //     "StartMonth": "12",
    // //     "StartYear": "2020",
    // //     "EndDay": "01",
    // //     "EndMonth": "12",
    // //     "EndYear": "2020",
    // //     "MobileNumber": "12012020",        
    // //     "PhoneNo": "12012020",        
    // //     "ReasonForLeaveRequest": "12012020",        
    // //     "AddressWhileOnLeave": "12012020",                  
    // //     "IsActive": "true"
    // // }
    // router.post('/InsertLeave', function (req, res, next) {
    //     LeaveDatails.create(req.body, function (err, leave) {
    //         if (err) {
    //             console.log(err);
    //             return next(err);
    //         }
    //         res.json(leave);
    //     });
    // });
    // // //http://localhost:3000/api/GetAllLeave
    // router.get('/GetAllLeave', function (req, res) {
    //     var mysort = { GId: 1 };
    //     var filterQuery = { StartYear: req.query.StartYear, StartMonth: req.query.StartMonth };
    //     LeaveDatails.find(function (err, leave) {
    //         if (err) return next(err);
    //         res.json(leave);
    //     }).sort(mysort);
    // });

    // // //To Filter with values
    // // //http://localhost:3000/api/GetSingleLeave?AreaCode=AS
    // router.get('/GetSingleLeave', function (req, res, next) {
    //     var filterQuery = { GId: req.query.GId, StartYear: req.query.StartYear, MonStartMonthth: req.query.StartMonth };
    //     //Regular expressions can only be used to query strings.
    //     //Find Area Code where the Area Code starts with the letter "D":   
    //     //var filterQuery = { AreaCode: /^D/ };
    //     LeaveDatails.find(filterQuery, function (err, leave) {
    //         if (err) return next(err);
    //         res.json(leave);
    //     });
    // });

    // // //Delete Values
    // router.get('/DeletLeave', function (req, res, next) {
    //     var filterQuery = { LId: req.query.LId };
    //     LeaveDatails.deleteOne(filterQuery, function (err, leave) {
    //         if (err) return next(err);
    //         res.json(leave);
    //     });
    // });
    // // //Update Values
    // // //http://localhost:3000/api/UpdateTimeSheets?AreaCode=AS&AreaCodeName=Japan&IsActive=false
    // // //First create query to fetch the value then create query to update value 
    // router.get('/UpdateLeave', function (req, res, next) {
    //     var filterQuery = { LId: req.query.LId };
    //     var updateValues = {
    //         $set: {
    //             GId: req.query.GId,                
    //             StartDay: req.query.StartDay,
    //             StartMonth: req.query.StartMonth,
    //             StartYear: req.query.StartYear,
    //             EndDay: req.query.EndDay,
    //             EndMonth: req.query.EndMonth,
    //             EndYear: req.query.EndYear,
    //             MobileNumber: req.query.MobileNumber,
    //             PhoneNo: req.query.PhoneNo,
    //             ReasonForLeaveRequest: req.query.ReasonForLeaveRequest,
    //             AddressWhileOnLeave: req.query.AddressWhileOnLeave,
    //             IsActive: req.query.IsActive,
    //             TransactionDate: Date.now()
    //         }
    //     };
    //     LeaveDatails.updateOne(filterQuery, updateValues, function (err, leave) {
    //         if (err) return next(err);
    //         res.json(leave);
    //     });
    // });
}