var express = require('express');
var app = express();
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var productRouter = require('./app/routers/productRouter');

mongoose.connect('mongodb://localhost/DesafioDb')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use("/api", router);

router.get("/", function(req, res){
	res.json({ message: "Desafio API is running" });
});

productRouter(router);

app.listen(port);
console.log("server is running on port "+port);