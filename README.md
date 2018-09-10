
# Explanation


This is a simple Ethereum event filter to be used in the context of a Truffle project. All that you have to do is to execute it as in the examples:

node filterGeneric.js -u <blockchain_endpoint> -c <ContractName> -a <contract_address> -e <event_name>


The assumptions are:
* The script is in the <truffle_project_dir>/filters/ folder 
* The contract is correctly compiled and the compilations are in ../builds

The rest is obvious:

```
node filterGeneric.js -u http://localhost:8545 -c Crowdsale -a 0x11d1927df85b65b577b8d02b7eefc6645a75a875 -e Log_TokenSold

node filterGeneric.js -u https://mainnet.infura.io/<your-infura-key> -c WhiteList -a 0xF1d1927df85b65b577b8d02b7eefc6645a75a875  -e WhitelistUpdated
```


You will get an output for the full JSON with the events that pass the filter.


# NEW


You can use it out-of-truffle giving the ABI in a parameter (-A)


node filterGeneric.js -u https://mainnet.infura.io/<your-infura-key> -c WhiteList -a 0xF1d1927df85b65b577b8d02b7eefc6645a75a875  -e WhitelistUpdated


// is  be equivalent to 

node filterGeneric.js -u https://mainnet.infura.io/<your-infura-key> -A WhiteList-just-abi-file.json -a 0xF1d1927df85b65b577b8d02b7eefc6645a75a875  -e WhitelistUpdated


NOTE: The builds from Truffle have included more than the "abi" in the JSON. My choice is to consider the more general case in wich you have the ABI isolated to be used to interface with the contract once deployed. So to be success using "-A option" if you are working with Truffle compilations you have to extract just the ABI in a file. This can be done preserving just from '[' to ']' for the abi item inside the json.






