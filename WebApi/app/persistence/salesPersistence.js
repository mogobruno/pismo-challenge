var Sales = require('./../models/sales');

var responseSender = function(err, response, res){
	if(err){
		res.send(err);
	}else{
		res.json(response);
	}
}

var isValid = function(sales){
	if(sales.total > 0){
		return true;
	}
	for (index in sales.products){
		var product = sales.products[index];
		if(product.amount >= product.salesAmount){
			return true;
		}
	}
	return false;
}

var persistence = {
	create: function(data, res){
		var sales = new Sales();
		
		sales.total = data.total || 0;
		for(index in data.products || []){
			var product = data.products[index];
			sales.products.push(product);
		}

		if(isValid(sales)){
			sales.save(function(err){
				responseSender(err, {message:'Sales saved'}, res);
			});
		}else{
			res.send({message:"Sales is invalid"})
		}
	},
	list: function(res){
		Sales.find(function(err, sales){
			responseSender(err, sales, res);
		});
	},	
	get: function(sales_id, res){
		Sales.findById(sales_id, function(err, sales){
			responseSender(err, sales, res);
		});
	},
}

module.exports = persistence;