var persistence = require('./../persistence/productPersistence');

var productRouter = function(router){

	router.route("/products")
	.post(function(req, res){
		persistence.create(req.body, res);
	})
	.get(function(req, res){
		persistence.list(res);
	});

	router.route("/products/:product_id")
	.get(function(req, res){
		persistence.get(req.params.product_id, res);
	})
	.put(function(req, res){
		persistence.update(req.params.product_id, req.body, res);
	})
	.delete(function(req, res){
		persistence.remove(req.params.product_id, res)
	});

}

module.exports = productRouter;