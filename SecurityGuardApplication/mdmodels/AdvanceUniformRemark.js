var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var AdUnReSchema = new mongoose.Schema({
  GId: { type: Number, required: true, index: true },
  AllottedAmount: { type: String, required: [true, 'What is Alloted Amount?'] },
  ReceivedAmount: { type: String, required: [true, 'What is Received Amount from Guard?'] },
  AmountType: { type: String, required: [true, 'Please select AmountType'], enum: ['Advance', 'Uniform', 'Remark', 'Other'] },
  ReasonRequest: { type: String, required: [true, 'What is your Reason?'] },
  GooglePhotoUrl: String,
  IsActive: { type: Boolean, required: true },
  TransactionDate: { type: Date, default: Date.now() }
});

//AdUnReSchema.index({ GId: 1 }, { unique: false })
AdUnReSchema.plugin(AutoIncrement, { inc_field: 'AURId' });
var AdUniReModel = mongoose.model('AdvanceUniformRemark', AdUnReSchema);

module.exports = AdUniReModel;