var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var TimeSheetSchema = new mongoose.Schema({
  //TId: { type: Number, required: true, unique: true },
  GId: { type: Number, required: true },
  AreaCode1: { type: String, required: [true, 'What is Area Code1?'], trim: true },
  AreaCode2: { type: String, trim: true },
  Month: { type: Number, required: [true, 'Month for Filter'] },
  Year: { type: Number, required: [true, 'Year for Filter'] },
  Day: { type: Number, required: [true, 'Date for Filter'] },
  IsActive: { type: Boolean, required: true },
  TransactionDate: { type: Date, default: Date.now() }
});
TimeSheetSchema.index({ GId: 1, Month: 1, Year: 1, Date: 1 }, { unique: true })

TimeSheetSchema.plugin(AutoIncrement, { inc_field: 'TId' });
var TimeSheetModel = mongoose.model('TimeSheets', TimeSheetSchema);

module.exports = TimeSheetSchema;