var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var AreaCodeSchema = new mongoose.Schema({
  //AId: { type: Number, default: 0 },
  AreaCode: { type: String, required: [true, 'What is Area Code?'], trim: true, unique: true },
  AreaCodeName: { type: String, required: [true, 'What is your Area Code Name?'], trim: true, },
  IsActive: { type: Boolean, required: true },
  TransactionDate: { type: Date, default: Date.now() }
});
AreaCodeSchema.index({ AreaCode: 1 }, { unique: true })

AreaCodeSchema.plugin(AutoIncrement, {inc_field: 'AId'});
var AreaCodeModel = mongoose.model('AreaCodes', AreaCodeSchema);


module.exports = AreaCodeModel;