
const options = {
	string: ['a'],
	default: {
		u: 'http://localhost:8545',
		A: '',
		c: ''
	}
};
const argv = require('minimist')(process.argv.slice(2), options);
//console.log(argv);

var neturl = argv['u'];
var contrato = argv['c'];
var addrTest = argv['a'];
var evento = argv['e'];
var jsonabi = argv['A'];


const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(neturl));


var abi;
if (jsonabi != '') {
	abi = require(jsonabi);
} else {
	abi = require('../build/contracts/'.concat(contrato,'.json')).abi;
}



const ABInstance = new web3.eth.Contract(abi,addrTest);
ABInstance.getPastEvents(evento, {
    filter: {}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0,
    toBlock: 'latest'
}, function(error, events){ console.log(JSON.stringify(events)); });



