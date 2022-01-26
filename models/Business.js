const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BusinessSchema = new Schema({
    name: { type: String },
    email: { type: String },
    registrationNo: { type: Number },
    //Each business is created by a User.
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    //Each business has multiple products
    product: [{ type: Schema.Types.ObjectId, ref: 'Products' }]
});

//url is used to reference a particular business
BusinessSchema
    .virtual('url')
    .get(function () {
        return '/api/business/' + this._id;
    });

//Export model
module.exports = mongoose.model('Business', BusinessSchema);
