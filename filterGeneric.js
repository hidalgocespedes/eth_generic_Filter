
const options = {
	string: ['a'],
	default: {
		u: 'http://localhost:8545',
		A: '',
		b: 0,
		B: 'latest',
		c: ''
	}
};
const argv = require('minimist')(process.argv.slice(2), options);
//console.log(argv);

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(argv['u']));


var abi;
if (argv['A'] != '') {
	abi = require(argv['A']); //Json with just the ABI
} else {
	abi = require('../build/contracts/'.concat(argv['c'],'.json')).abi;
}

const ABInstance = new web3.eth.Contract(abi, argv['a']);
ABInstance.getPastEvents(argv['e'], {
    filter: {}, // Using an array means OR: e.g. 20 or 23
    fromBlock: argv['b'],
    toBlock: argv['B']
}, function(error, events){ console.log(JSON.stringify(events)); });



