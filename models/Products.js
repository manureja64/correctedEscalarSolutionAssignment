const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: { type: String, required: true },
    mrp: { type: Number },
    description: { type: String },
    // Each Product is created either by an user individually or through its business
    business: { type: Schema.Types.ObjectId, ref: 'Business' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

//'url' is used to make a reference to a product.
ProductSchema
    .virtual('url')
    .get(function () {
        return '/api/product/' + this._id;
    });

// Export Products
module.exports = mongoose.model('Products', ProductSchema);
