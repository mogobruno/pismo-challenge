(function(){

var express = require('express');
var app = express();
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var productRouter = require('./app/routers/productRouter');
var salesRouter = require('./app/routers/salesRouter');

mongoose.connect('mongodb://localhost/DesafioDb')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header("Access-Control-Allow-Methods", "PUT, GET, DELETE, POST");
	next();
});

app.use("/api", router);

router.get("/", function(req, res){
	res.json({ message: "Desafio API is running" });
});

productRouter(router);
salesRouter(router);

app.listen(port);
console.log("server is running on port "+port);

})();