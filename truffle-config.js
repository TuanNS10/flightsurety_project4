var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "Ensure you do not use it on production blockchains, or else you risk losing funds";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: '*',
      gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};