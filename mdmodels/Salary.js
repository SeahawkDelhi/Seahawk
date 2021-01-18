var mongoose = require('mongoose');

var SalarySchema = new mongoose.Schema({
    SId: { type: Number, required: true, unique: true },
    GId: { type: Number, required: true },
    MonthlySalary: { type: String, required: [true, 'What is Monthly Salary?']},
    Totalattendance: { type: String, required: [true, 'What is attendance?']},
    TotalaSalary: { type: String, required: [true, 'What is Total Salary?']},    
    Advance: { type: String, required: [true, 'What is Advance?']},        
    Esr: { type: String},
    Pf: { type:String},
    FinalSalary: { type: String, required: [true, 'What is Total Salary?']},    
    SalaryDistributionType: { type: String, required: [true, 'Please select Salary Distribution Type'], enum: ['Check', 'Case','DD'] },    
    IsActive: { type: Boolean, required: true },    
    TransactionDate: { type: Date, default: Date.now() }
});

var SalaryModel = mongoose.model('Salary', SalarySchema);

var entitySchema = mongoose.Schema({
    testvalue: { type: String }
  });
  
  entitySchema.pre('save', function (next) {
    if (this.isNew) {
      var doc = this;
      SalaryModel.findByIdAndUpdate({ SId: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
        .then(function (count) {
          doc.testvalue = count.seq;
          next();
        })
        .catch(function (error) {
          throw error;
        });
    } else {
      next();
    }
  });

module.exports = SalarySchema;