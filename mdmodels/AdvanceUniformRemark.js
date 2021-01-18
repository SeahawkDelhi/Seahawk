var mongoose = require('mongoose');

var AdvanceUniformRemarkSchema = new mongoose.Schema({
    AURId: { type: Number, required: true, unique: true },
    GId: { type: Number, required: true },
    AllottedAmount: { type: String, required: [true, 'What is Alloted Amount?']},
    ReceivedAmount: { type: String, required: [true, 'What is Received Amount from Guard?']},
    AmountType: { type: String, required: [true, 'Please select AmountType'], enum: ['Advance', 'Uniform','Remark','Other'] },    
    ReasonRequest: { type: String, required: [true, 'What is your Reason?'] },
    Photo: Buffer,
    IsActive: { type: Boolean, required: true },    
    TransactionDate: { type: Date, default: Date.now() }
});

var AdvanceUniformRemarkModel = mongoose.model('AdvanceUniformRemark', AdvanceUniformRemarkSchema);

var entitySchema = mongoose.Schema({
    testvalue: { type: String }
  });
  
  entitySchema.pre('save', function (next) {
    if (this.isNew) {
      var doc = this;
      AdvanceUniformRemarkModel.findByIdAndUpdate({ AURId: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
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

module.exports = AdvanceUniformRemarkModel;