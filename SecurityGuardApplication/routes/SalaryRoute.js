var Salary = require('../mdmodels/Salary.js');

exports = module.exports = function (router) {
    //Insert
    //http://localhost:3000/api/InsertSalary
    // {
    //     "GId":"1",
    //     "Month": "01",
    //     "Year": "12",
    //     "MonthlySalaryAmount": "2020",
    //     "Totalattendance": "01",
    //     "TotalaSalary": "12",
    //     "Advance": "2020",
    //     "Esr": "12012020",        
    //     "Pf": "12012020",        
    //     "FinalSalary": "12012020",        
    //     "SalaryDistributionType": "12012020",                  
    //     "IsActive": "true"
    // }
    router.post('/InsertSalary', function (req, res, next) {
        Salary.create(req.body, function (err, salary) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(salary);
        });
    });
    // //http://localhost:3000/api/GetAllSalary
    router.get('/GetAllSalary', function (req, res) {
        var mysort = { GId: 1 };
        var filterQuery = { StartYear: req.query.StartYear, StartMonth: req.query.StartMonth };
        Salary.find(function (err, salary) {
            if (err) return next(err);
            res.json(salary);
        }).sort(mysort);
    });

    // //To Filter with values
    // //http://localhost:3000/api/GetSingSalary?AreaCode=AS
    router.get('/GetSingleSalary', function (req, res, next) {
        var filterQuery = { GId: req.query.GId, StartYear: req.query.StartYear, MonStartMonthth: req.query.StartMonth };
        //Regular expressions can only be used to query strings.
        //Find Area Code where the Area Code starts with the letter "D":   
        //var filterQuery = { AreaCode: /^D/ };
        Salary.find(filterQuery, function (err, salary) {
            if (err) return next(err);
            res.json(salary);
        });
    });

    // //Delete Values
    router.get('/DeletSalary', function (req, res, next) {
        var filterQuery = { LId: req.query.LId };
        Salary.deleteOne(filterQuery, function (err, salary) {
            if (err) return next(err);
            res.json(salary);
        });
    });
    // //Update Values
    // //http://localhost:3000/api/UpdateTimeSheets?AreaCode=AS&AreaCodeName=Japan&IsActive=false
    // //First create query to fetch the value then create query to update value 
    router.get('/UpdateSalary', function (req, res, next) {
        var filterQuery = { LId: req.query.LId };
        var updateValues = {
            $set: {
                GId: req.query.GId,
                Month: req.query.Month,
                Year: req.query.Year,
                MonthlySalaryAmount: req.query.MonthlySalaryAmount,
                Totalattendance: req.query.Totalattendance,
                TotalaSalary: req.query.TotalaSalary,
                Advance: req.query.Advance,
                Esr: req.query.Esr,
                Pf: req.query.Pf,
                FinalSalary: req.query.FinalSalary,
                SalaryDistributionType: req.query.SalaryDistributionType,
                IsActive: req.query.IsActive,
                TransactionDate: Date.now()
            }
        };
        LeaveSalary.updateOne(filterQuery, updateValues, function (err, salary) {
            if (err) return next(err);
            res.json(salary);
        });
    });
}