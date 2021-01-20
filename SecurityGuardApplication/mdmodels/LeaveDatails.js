var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var LeaveSchema = new mongoose.Schema({
    //LId: { type: Number, required: true, unique: true },
    GId: { type: Number, required: true },
    StartDay: { type: Number, required: [true, 'Day?'] },
    StartMonth: { type: Number, required: [true, 'Month'] },
    StartYear: { type: Number, required: [true, 'Year'] },
    EndDay: { type: Number, required: [true, 'Day'] },
    EndMonth: { type: Number, required: [true, 'Month'] },
    EndYear: { type: Number, required: [true, 'Year'] },
    MobileNumber: { type: Date, required: [true, 'What is Mobile No?'] },
    PhoneNo: { type: Number, min: 10, max: 10, required: [true, 'What is Phone No?'] },
    ReasonForLeaveRequest: { type: String, required: [true, 'What is your Reason?'] },
    AddressWhileOnLeave: { type: String, required: [true, 'What is your Address?'] },
    IsActive: { type: Boolean, required: true },
    TransactionDate: { type: Date, default: Date.now() }
});
LeaveSchema.index({ GId: 1, StartDay: 1, StartMonth: 1, StartYear: 1, EndDay: 1, EndMonth: 1, EndYear: 1, IsActive: 1 }, { unique: true })

LeaveSchema.plugin(AutoIncrement, { inc_field: 'LId' });
var LeaveModel = mongoose.model('LeaveDetails', LeaveSchema);

module.exports = LeaveModel;