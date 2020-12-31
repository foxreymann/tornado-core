require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const utils = require('web3-utils')
const mnemonic = process.env.BOTNOMIC

module.exports = {
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      websockets: true,
      gasPrice: 1000000000,
      defaultEtherBalance: 9999
    },
    moonbase: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic
          },
          providerOrUrl: "https://rpc.testnet.moonbeam.network",
       numberOfAddresses: 1,
       shareNonce: true,
      }),
      network_id: 1287,
      gasPrice: 0,
      gas: 12000000,
      skipDryRun: true
    },

/*
    kovan: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, 'https://kovan.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3'),
      network_id: 42,
      gas: 6000000,
      gasPrice: utils.toWei('1', 'gwei'),
      // confirmations: 0,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, 'https://rinkeby.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3'),
      network_id: 4,
      gas: 6000000,
      gasPrice: utils.toWei('1', 'gwei'),
      // confirmations: 0,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, 'http://ethereum-rpc.trustwalletapp.com'),
      network_id: 1,
      gas: 6000000,
      gasPrice: utils.toWei('2', 'gwei'),
      // confirmations: 0,
      // timeoutBlocks: 200,
      skipDryRun: true
    },
*/
  },

  compilers: {
    solc: {
      version: '0.5.17',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    external: {
      command: 'node ./compileHasher.js',
      targets: [{
        path: './build/Hasher.json'
      }]
    }
  }
}
