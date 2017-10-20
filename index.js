//import module: bitcoinjs-lib
let bitcoin = require('bitcoinjs-lib');

//store keyPair information for new key
let keyPair = bitcoin.ECPair.makeRandom();
console.log('\n' + 'KeyPair Object' + '\n' + keyPair + '\n');

//store address from keyPair to new variable
let address = keyPair.getAddress();
console.log('Public Key / Address' + '\n' + address + '\n');

//store private key of new address
let pkey = keyPair.toWIF();
console.log('Private Key' + '\n' + pkey + '\n');

let litecoin = bitcoin.networks.litecoin;
function rng(){
	return Buffer.from('random_bufferrandom_buffer______')
};

let litePair = bitcoin.ECPair.makeRandom({network: litecoin, rng: rng});
let wif = keyPair.toWIF();
let liteAddress = litePair.getAddress();
console.log('Litecoin Address' + '\n' + liteAddress + '\n');
