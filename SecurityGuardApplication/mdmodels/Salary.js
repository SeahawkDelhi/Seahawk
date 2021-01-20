var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var SalarySchema = new mongoose.Schema({
  //SId: { type: Number, required: true, unique: true },
  GId: { type: Number, required: true },
  Month: { type: Number, required: [true, 'What is Month of Salary?'] },
  Year: { type: Number, required: [true, 'What is Year of Salary?'] },
  MonthlySalaryAmount: { type: String, required: [true, 'What is Monthly Salary?'] },
  Totalattendance: { type: String, required: [true, 'What is attendance?'] },
  TotalaSalary: { type: String, required: [true, 'What is Total Salary?'] },
  Advance: { type: String, required: [true, 'What is Advance?'] },
  Esr: { type: String },
  Pf: { type: String },
  FinalSalary: { type: String, required: [true, 'What is Total Salary?'] },
  SalaryDistributionType: { type: String, required: [true, 'Please select Salary Distribution Type'], enum: ['Check', 'Case', 'DD'] },
  IsActive: { type: Boolean, required: true },
  TransactionDate: { type: Date, default: Date.now() }
});

SalarySchema.index({ GId: 1, Month: 1, Year: 1 }, { unique: true })

SalarySchema.plugin(AutoIncrement, { inc_field: 'SId' });
var SalaryModel = mongoose.model('Salary', SalarySchema);

module.exports = SalarySchema;