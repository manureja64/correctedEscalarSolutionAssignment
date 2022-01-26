const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: { type: String, reequired: true },
    email: { type: String },
    bio: { type: String },
    //Each User has multiple Businesses and multiple Products
    business: [{ type: Schema.Types.ObjectId, ref: 'Business' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'Products' }]
});

//'url' is used to make a reference to a particular User.

UserSchema
    .virtual('url')
    .get(function () {
        return '/api/user/' + this._id;
    });

//Export user
module.exports = mongoose.model('User', UserSchema);
