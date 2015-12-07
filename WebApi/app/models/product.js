var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ProductSchema = new Schema({
	name: String,
	description: String,
	value: Number,
	amount: Number,
	type: String
});

module.exports = mongoose.model('product', ProductSchema);