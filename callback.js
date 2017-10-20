let request = require('request');

function getPrice(x){
	request({
   		url: 'https://blockchain.info/stats?format=json',
    	json:true
	}, function(err, res, body){
		let price = body.market_price_usd;
		let blocks = body.n_blocks_total;
		x(price, blocks);
	});
};

function hello(){
	console.log('hello there');
};

getPrice(function(icecream, waffles){
	console.log(icecream);
	console.log(waffles);
	hello();
});

/*
function typical(a, b, c){
    let x = a + b;
    c(x);
};

typical(3, 2, function(nachos){
    console.log(nachos);
});
*/

