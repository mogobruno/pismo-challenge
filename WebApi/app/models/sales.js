(function(){

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SalesSchema = new Schema({
	products: [],
	total: Number
});

module.exports = mongoose.model('sales', SalesSchema);

})();