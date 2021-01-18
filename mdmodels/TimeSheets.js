var mongoose = require('mongoose');

var TimeSheetSchema = new mongoose.Schema({
    TId: { type: Number, required: true, unique: true },
    GId: { type: Number, required: true },
    AreaCode1: { type: String, required: [true, 'What is Area Code1?'], trim: true},
    AreaCode2: { type: String,  trim: true},
    TimeEntryDate: { type: Date, required: [true, 'What is TimeEntryDate?'] },        
    IsActive: { type: Boolean, required: true },
    TransactionDate: { type: Date, default: Date.now() }
});
TimeSheetSchema.index({ GId: 1, TimeEntryDate: 1 }, { unique: true })

var TimeSheetModel = mongoose.model('TimeSheets', TimeSheetSchema);

var entitySchema = mongoose.Schema({
    testvalue: { type: String }
  });
  
  entitySchema.pre('save', function (next) {
    if (this.isNew) {
      var doc = this;
      TimeSheetModel.findByIdAndUpdate({ TId: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
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

module.exports = TimeSheetSchema;