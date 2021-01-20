var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var DistributorsSchema = new mongoose.Schema({
    //AId: { type: Number, default: 0 },    
    PurchaseStockType: { type: String, required: [true, 'Please select Pure Stock Type'], enum: ['shirtpaint', 'shirt', 'paint', 'Other'] },
    DistributorName: { type: String, required: [true, 'Please Provide Distributer Name'], index: true },
    TotalPurchaseStock: { type: String, required: [true, 'what is Total purchase stock?'] },
    ToatlAmount: { type: String, required: [true, 'Total Amount of Distributer items'] },
    OneItemAmount: { type: String, required: [true, 'One Item Amount?'] },
    Balance: { type: String, required: [true, 'What is balance Amount?'] },
    GuardDistributeCount: { type: String, required: [true, 'How much Distribute to Guard? Diable this Column'] },
    GooglePhotoUrl: String,
    IsActive: { type: Boolean, required: true },
    TransactionDate: { type: Date, default: Date.now() }
});

//DistributorsSchema.index({ DistributorName: 1 }, { unique: false })
DistributorsSchema.plugin(AutoIncrement, { inc_field: 'UDId' });
var AreaCodeModel = mongoose.model('Distributors', DistributorsSchema);


module.exports = AreaCodeModel;