
var neturl = process.argv[2];
var contrato = process.argv[3];
var addrTest = process.argv[4];
var evento = process.argv[5];

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(neturl));

var someObject = require('../build/contracts/'.concat(contrato,'.json'));
var abi = someObject.abi;


const ABInstance = new web3.eth.Contract(abi,addrTest);
ABInstance.getPastEvents(evento, {
    filter: {}, // Using an array means OR: e.g. 20 or 23
    fromBlock: 0,
    toBlock: 'latest'
}, function(error, events){ console.log(JSON.stringify(events)); });



