var Product = require('./../models/product');

var productRouter = function(router){

	router.route("/products")
	.post(function(req, res){
		var product = new Product();
		product.name = req.body.name;

		console.log(product);
		console.log(req.body);
		console.log(req.body.name);

		product.save(function(err){
			console.log(err);
			if(err){
				res.send(err);
			}else{
				res.json({ message:"Product created", status: "ok"});
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
	})

}

module.exports = productRouter;