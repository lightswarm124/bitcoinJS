let bitcoinjs = require('bitcoinjs-lib');

let hit = 0;
let tryN = 0;

while(hit < 1){
	let keyPair = bitcoinjs.ECPair.makeRandom();
	let address = keyPair.getAddress();
	let pkey = keyPair.toWIF();
	
	let vanity = address.substring(1,4);
	console.log(tryN + ': ' + vanity + ' ' + address );
	if(vanity == 'Ne0' || vanity == 'nEO' || vanity == 'N30'){
		console.log(address + ' ' + pkey);
		hit = 2;
	}
	tryN++;
}
