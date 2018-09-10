

# Explanation

This is a simple Ethereum event filter to be used in the context of a Truffle project. All that you have to do is execute it as in the examples:

node filterGeneric.js <blockchain-endpoint> <ContractName> <contract_address> <event_name>


The assumptions are:
* The scrit is in the <truffle-project-dir>/filters/ folder 
* The contract is correctly compiled and the compilations are in ../builds

The rest is obvious:

node filterGeneric.js http://localhost:8545 Crowdsale 0x11d1927df85b65b577b8d02b7eefc6645a75a875 Log_TokenSold

node filter_generic.js https://mainnet.infura.io/<your-infura-key> WhiteList 0xF1d1927df85b65b577b8d02b7eefc6645a75a875  WhitelistUpdated
