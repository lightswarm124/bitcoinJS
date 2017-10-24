let express = require('express');
let app = express();
let request = require('request');
let bodyparser = require('body-parser');
let bitcore = require('bitcore-lib');
let bigi = require('bigi');

app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(bodyparser.json());

app.set('view engine', 'ejs');

function brainWallet(uinput, callback){
	let input = new Buffer(uinput);
	let hash = bitcore.crypto.Hash.sha256(input);
	let bn = bitcore.crypto.BN.fromBuffer(hash);
	let pk = new bitcore.PrivateKey(bn).toWIF();
	let address = new bitcore.PrivateKey(bn).toAddress();
	callback(pk, address);
};

function getPrice(returnPrice){
	request({
		url: "https://wex.nz/api/3/ticker/btc_usd",
		json: true
	}, function(err, res, body){
		returnPrice(body.btc_usd.last);
	});
};



app.get("/", function(req, res){
	getPrice(function(lastPrice){
		res.render("index", {
			lastPrice: lastPrice
		});
	});
});

app.get("/brain", function(req, res){
	getPrice(function(lastPrice){
		res.render("brain", {
			lastPrice: lastPrice
		});
	});
});

app.get("/converter", function(req, res){
	getPrice(function(lastPrice){
		res.render("converter", {
			lastPrice: lastPrice
		});
	});
});

app.post("/wallet", function(req, res){
	let brainsrc = req.body.brainsrc;
	console.log(brainsrc);
	brainWallet(brainsrc, function(privKey, addr){
		res.send("The Brain wallet of: " + brainsrc + "<br>Address: " + addr + "<br>Private Key: " + privKey);
	});
});


app.listen(8080, function(){
	console.log("go");
});
