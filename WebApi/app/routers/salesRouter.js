(function(){
	
var persistence = require('./../persistence/salesPersistence');

var salesRouter = function(router){

	router.route("/sales")
	.post(function(req, res){
		persistence.create(req.body, res);
	})
	.get(function(req, res){
		persistence.list(res);
	});

	router.route("/sales/:sales_id")
	.get(function(req, res){
		persistence.get(req.params.sales_id, res);
	});

}

module.exports = salesRouter;

})();