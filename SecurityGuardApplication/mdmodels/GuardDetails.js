var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var GuardDetailsSchema = new mongoose.Schema({
  //GId: { type: Number, required: true, unique: true },
  FName: { type: String, required: [true, 'What is your FName?'], trim: true },
  LName: { type: String, required: [true, 'What is your LName?'] },
  DobDay: { type: Number, required: [true, 'What is your DOB?'] },
  DobMonth: { type: Number, required: [true, 'What is your DOB?'] },
  DobYear: { type: Number, required: [true, 'What is your DOB?'] },
  IsResign: { type: Boolean, required: true },
  FatherName: { type: String, required: [true, 'What is your Father Name?'] },
  Language: { type: String, required: [true, 'Please select language'], enum: ['Hindi', 'English'] },
  FormSubmissionDay: { type: Number, required: true },
  FormSubmissionMonth: { type: Number, required: true },
  FormSubmissionYear: { type: Number, required: true },
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
  GooglePhotoUrlUrl: String,
  GooglePhotoUrl: String,
  GoogleVerificationUrl: String,
  GoogleJoiningLetterUrl: String,
  MonthlySalary: String,
  ResignReason: String,
  ResignDay: { type: Number, required: [true, 'Date Formate DDMMYYYY?'] },
  ResignMonth: { type: Number, required: [true, 'Date Formate DDMMYYYY?'] },
  ResignYear: { type: Number, required: [true, 'Date Formate DDMMYYYY?'] },
  ResignLetter: String,
  IsActive: { type: Boolean, required: true },
  TransactionDate: { type: Date, default: Date.now() }
});
GuardDetailsSchema.index({ FName: 1, LName: 1, Dob: 1 }, { unique: true })

GuardDetailsSchema.plugin(AutoIncrement, { inc_field: 'GId' });
var GuardDetailsModel = mongoose.model('GuardDetails', GuardDetailsSchema);

module.exports = GuardDetailsModel;