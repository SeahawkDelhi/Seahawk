var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var UniformDistributorsSchema = new mongoose.Schema({
    //UId: { type: Number, required: true, unique: true },    
    DistributorName: { type: String, required: [true, 'What is Distributer Name?']},
    PurchaseStockType: { type: String, required: [true, 'Please select Pure Stock Type'], enum: ['shirtpaint', 'shirt','paint','Other'] },
    TotalPurchaseStock: { type: String, required: [true, 'what is Total purchase stock?']},
    ToatlAmount: { type: String, required: [true, 'Total Amount of Distributer items']},    
    OneItemAmount: { type: String, required: [true, 'One Item Amount?'] },
    Balance: { type: String, required: [true, 'What is balance Amount?'] },
    DistributeCount: { type: String, required: [true, 'How much Distribute to Guard? Diable this Column'] },
    Photo: Buffer,
    IsActive: { type: Boolean, required: true },    
    TransactionDate: { type: Date, default: Date.now() }
});

UniformDistributorsSchema.plugin(AutoIncrement, {inc_field: 'UId'});
var UniformDistributorsModel = mongoose.model('UniformDistributors', UniformDistributorsSchema);



module.exports = UniformDistributorsSchema;