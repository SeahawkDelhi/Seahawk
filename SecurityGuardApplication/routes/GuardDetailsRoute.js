var GuardDetails = require('../mdmodels/GuardDetails.js');

exports = module.exports = function (router) {
    //Insert
    //http://localhost:3000/api/InsertGuardDetails
    // {
    // "FName": "Test",
    // "LName": "Test",
    // "DobDay": "01",
    // "DobMonth": "12",
    // "DobYear": "2020",
    // "IsResign": "true",
    // "FatherName": "Test",
    // "Language": "Hindi",
    // "FormSubmissionDay": "01",
    // "FormSubmissionMonth": "12",
    // "FormSubmissionYear": "2020",
    // "PhoneNo": "1111111111",
    // "Email": "1111111111"
    // "Experience": "20",
    // "PermanentAddress": "Test",
    // "PresentAddress": "Test",
    // "GooglePhotoUrlUrl": "http://googl.com/hi",
    // "GooglePhotoUrl": "http://googl.com/hi",
    // "GoogleVerificationUrl": "http://googl.com/hi",
    // "GoogleJoiningLetterUrl": "http://googl.com/hi",
    // "MonthlySalary": "10000",
    // "ResignReason": "xyz",
    // "ResignDay": "01",
    // "ResignMonth": "12",
    // "ResignYear": "2020",
    // "ResignLetter": "Test",                
    //     "IsActive": "true"
    // }
    router.post('/InsertGuardDetails', function (req, res, next) {
        GuardDetails.create(req.body, function (err, GuardDetails) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(GuardDetails);
        });
    });
    // //http://localhost:3000/api/GetAllGuardDetails
    router.get('/GetAllGuardDetails', function (req, res) {
        var mysort = { GId: 1 };
        var filterQuery = { StartYear: req.query.StartYear, StartMonth: req.query.StartMonth };
        GuardDetails.find(function (err, GuardDetails) {
            if (err) return next(err);
            res.json(GuardDetails);
        }).sort(mysort);
    });

    // //To Filter with values
    // //http://localhost:3000/api/GetSingGuardDetails?AreaCode=AS
    router.get('/GetSingleGuardDetails', function (req, res, next) {
        var filterQuery = { GId: req.query.GId, StartYear: req.query.StartYear, MonStartMonthth: req.query.StartMonth };
        //Regular expressions can only be used to query strings.
        //Find Area Code where the Area Code starts with the letter "D":   
        //var filterQuery = { AreaCode: /^D/ };
        GuardDetails.find(filterQuery, function (err, GuardDetails) {
            if (err) return next(err);
            res.json(GuardDetails);
        });
    });

    // //Delete Values
    router.get('/DeletGuardDetails', function (req, res, next) {
        var filterQuery = { LId: req.query.LId };
        // createdAt: {
        //     $gte: startOfDay(new Date()),
        //     $lte: endOfDay(new Date())
        //   }
        
        GuardDetails.deleteOne(filterQuery, function (err, GuardDetails) {
            if (err) return next(err);
            res.json(GuardDetails);
        });
    });
    // //Update Values
    // //http://localhost:3000/api/UpdateTimeSheets?AreaCode=AS&AreaCodeName=Japan&IsActive=false
    // //First create query to fetch the value then create query to update value 
    router.get('/UpdateGuardDetails', function (req, res, next) {
        var filterQuery = { LId: req.query.LId };
        var updateValues = {
            $set: {
                "FName": req.query.FName,
                "LName": req.query.LNameGId,
                "DobDay": req.query.DobDay,
                "DobMonth": req.query.DobMonth,
                "DobYear": req.query.DobYear,
                "IsResign": req.query.IsResign,
                "FatherName": req.query.FatherName,
                "Language": req.query.Language,
                "FormSubmissionDay": req.query.FormSubmissionDay,
                "FormSubmissionMonth": req.query.FormSubmissionMonth,
                "FormSubmissionYear": req.query.FormSubmissionYear,
                "PhoneNo": req.query.PhoneNo,
                "Email": req.query.Email,
                "Experience": req.query.Experience,
                "PermanentAddress": req.query.PermanentAddress,
                "PresentAddress": req.query.PresentAddress,
                "GooglePhotoUrlUrl": req.query.GooglePhotoUrlUrl,
                "GooglePhotoUrl": req.query.GooglePhotoUrl,
                "GoogleVerificationUrl": req.query.GoogleVerificationUrl,
                "GoogleJoiningLetterUrl": req.query.GoogleJoiningLetterUrl,
                "MonthlySalary": req.query.MonthlySalary,
                "ResignReason": req.query.ResignReason,
                "ResignDay": req.query.ResignDay,
                "ResignMonth": req.query.ResignMonth,
                "ResignYear": req.query.ResignYear,
                "ResignLetter": req.query.ResignLetter,
                IsActive: req.query.IsActive,
                TransactionDate: Date.now()
            }
        };
        LeaveGuardDetails.updateOne(filterQuery, updateValues, function (err, GuardDetails) {
            if (err) return next(err);
            res.json(GuardDetails);
        });
    });
}