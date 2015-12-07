var percistence = require('./../persistence/productPersistence');

var productRouter = function(router){

	router.route("/products")
	.post(function(req, res){
		percistence.create(req.body, res);
	})
	.get(function(req, res){
		percistence.list(res);
	});

	router.route("/products/:product_id")
	.get(function(req, res){
		percistence.get(req.params.product_id, res);
	})
	.put(function(req, res){
		percistence.update(req.params.product_id, req.body, res);
	})
	.delete(function(req, res){
		percistence.remove(req.params.product_id, res)
	});

}

module.exports = productRouter;