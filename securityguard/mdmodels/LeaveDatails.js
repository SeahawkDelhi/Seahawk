var mongoose = require('mongoose');

var LeaveSchema = new mongoose.Schema({
    LId: { type: Number, required: true, unique: true },
    GId: { type: Number, required: true},
    StartDate: { type: Date, required: [true, 'What is Atart Date?'] },
    EndDate: { type: Date, required: [true, 'What is End Date?'] },
    MobileNumber: { type: Date, required: [true, 'What is End Date?'] },
    PhoneNo: { type: Number, min: 10, max: 10, required: [true, 'What is your contact number?'] },
    ReasonForLeaveRequest: { type: String, required: [true, 'What is your Reason?'] },
    AddressWhileOnLeave: { type: String, required: [true, 'What is your Address?'] },
    IsActive: { type: Boolean, required: true },
    TransactionDate: { type: Date, default: Date.now() }
});
LeaveSchema.index({ GId: 1, StartDate: 1, EndDate: 1 }, { unique: true })

var LeaveModel = mongoose.model('LeaveDetails', LeaveSchema);

var entitySchema = mongoose.Schema({
    testvalue: { type: String }
  });
  
  entitySchema.pre('save', function (next) {
    if (this.isNew) {
      var doc = this;
      LeaveModel.findByIdAndUpdate({ LId: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
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

module.exports = LeaveModel;