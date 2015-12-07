var Product = require('./../models/product');

var productRouter = function(router){

	router.route("/products")
	.post(function(req, res){
		var product = new Product();
		product.name = req.body.name;

		console.log(product);
		console.log(req.body);
		console.log(req.body.name);
		console.log(product.save);

		product.save(function(err){
			console.log(err);
			if(err){
				res.send(err);
			}else{
				res.json({ message:"Product created"});
			}
		});
	})
	.get(function(req, res){
		Product.find(function(err, products){
			if(err){
				res.send(err);
			}else{
				res.json(products);
			}
		});
	});

	router.route("/products/:product_id")
	.get(function(req, res){
		Product.findById(req.params.product_id, function(err, product){
			if(err){
				res.send(err);
			}else{
				res.json(product);
			}
		});
	})
	.put(function(req, res){
		Product.findById(req.params.product_id, function(err, product){
			if(err){
				res.send(err);
			}else{

				product.name = req.body.name;

				product.save(function(err){
					if(err){
						res.send(err);
					}else{
						res.json({message: 'Product updated.'});
					}
				})				
			}
		});
	})
	.delete(function(req, res){
		Product.remove({
			_id: req.params.product_id
		}, function(err){
			if(err){
				res.send(err);
			}else{
				res.json({ message: 'Product deleted'});
			}
		});
	});

}

module.exports = productRouter;