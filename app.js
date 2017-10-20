let express = require('express');
let app = express();
let request = require('request');
let bodyparser = require('body-parser');
let bitcoinjs = require('bitcoinjs-lib');
let bigi = require('bigi');

app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(bodyparser.json());

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/wallet", function(req, res){
	let brainsrc = req.body.brainsrc;
	console.log(brainsrc);
	let input = new Buffer(brainsrc);
	let hash = bitcoinjs.crypto.sha256(input);
	let d = bigi.fromBuffer(hash);
	let pk = new bitcoinjs.ECPair(d);
	let wif = pk.toWIF();
	let address = pk.getAddress();
	res.send("The Brain wallet of: " + brainsrc + "<br>Address: " + address + "<br>Private Key: " + wif);
});


app.listen(8080, function(){
	console.log("go");
});
