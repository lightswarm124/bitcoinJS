let key = "API KEY";
let secret = "API SECRET";

blocktrail = require('blocktrail-sdk');

client = blocktrail.BlocktrailSDK({
	apiKey: key,
	apiSecret: secret;
	network: 'BTC',
	testnet: false
});

client.initWallet("mywallet", "mypassword",
	function(err, wallet){
	wallet.getNewAddress(function(err, address){
		console.log(address);
	});
});
