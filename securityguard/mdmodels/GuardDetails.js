var mongoose = require('mongoose');

var GuardDetailsSchema = new mongoose.Schema({
  GId: { type: Number, required: true, unique: true },
  FName: { type: String, required: [true, 'What is your FName?'], trim: true },
  LName: { type: String, required: [true, 'What is your LName?'] },
  Dob: { type: Date, required: [true, 'What is your DOB?'] },
  IsResign: { type: Boolean, required: true },
  FatherName: { type: String, required: [true, 'What is your Father Name?'] },
  Language: { type: String, required: [true, 'Please select language'], enum: ['Hindi', 'English'] },
  FormSubmissionDate: { type: Date, required: true },
  PhoneNo: { type: Number, min: 10, max: 10, required: [true, 'What is your contact number?'] },
  Email: {
    type: String,
    validate: function (email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }
  },
  Experience: { type: String, required: [true, 'What is your Experience?'] },
  PermanentAddress: { type: String, required: [true, 'What is your Permanent Address?'] },
  PresentAddress: String,
  Photo: Buffer,
  Verification: Buffer,
  JoiningLetter: Buffer,
  MonthlySalary: String,
  ResignReason: String,
  ResignDate: Date,
  ResignLetter: String,
  TransactionDate: { type: Date, default: Date.now() }
});
GuardDetailsSchema.index({ FName: 1, LName: 1, Dob: 1 }, { unique: true })

var GuardDetailsModel = mongoose.model('GuardDetails', GuardDetailsSchema);

var entitySchema = mongoose.Schema({
  testvalue: { type: String }
});

entitySchema.pre('save', function (next) {
  if (this.isNew) {
    var doc = this;
    GuardDetailsModel.findByIdAndUpdate({ GId: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
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

module.exports = GuardDetailsModel;