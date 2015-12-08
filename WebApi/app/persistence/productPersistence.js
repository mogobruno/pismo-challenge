var Product = require('./../models/product');

var responseSender = function(err, response, res){
	if(err){
		res.send(err);
	}else{
		res.json(response);
	}
}

var isValid = function(product){
	console.log(product.name.length <= 50);
	console.log(product.description.length <= 250);
	console.log(product.type === "Peca");
	console.log(product.type === "Caixa");
	console.log(product.type === "Unidade");
	if(product.name.length <= 50 &&
		   product.description.length <= 250 &&
		   (product.type === "Peca"  ||
		   product.type === "Caixa" ||
		   product.type === "Unidade")){
		return true;
	}
	return false;
}

var percistence = {
	create: function(data, res){
		var product = new Product();
		
		product.name = data.name || "";
		product.description = data.description || "";
		product.value = data.value || 0;
		product.amount = data.amount || 0;
		product.type = data.type || "Unidade";



		if(isValid(product)){
			product.save(function(err){
				responseSender(err, {message:'Product saved'}, res);
			});
		}else{
			res.send({message:"Product is invalid"})
		}
	},
	update: function(product_id, data, res){
		Product.findById(product_id, function(err, product){
			if(err){
				res.send(err);
			}else{
				product.name = data.name || product.name;
				product.description = data.description || product.description;
				product.value = data.value || product.value;
				product.amount = data.amount || product.amount;
				product.type = data.type || product.type;
				if(isValid(product)){
					product.save(function(err){
						responseSender(err, product, res);
					});
				}else{
					res.send({message:"Product is invalid"})
				}		
			}
		});
	},
	list: function(res){
		Product.find(function(err, products){
			responseSender(err, products, res);
		});
	},	
	get: function(product_id, res){
		Product.findById(product_id, function(err, product){
			responseSender(err, product, res);
		});
	},
	remove: function(product_id, res){
		Product.remove({
			_id: product_id
		}, function(err){
			responseSender(err, { message: 'Product deleted'}, res);
		});
	},
}

module.exports = percistence;