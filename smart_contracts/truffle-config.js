/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 const HDWalletProvider = require('@truffle/hdwallet-provider');
 const KlaytnHDWalletProvider = require("truffle-hdwallet-provider-klaytn");
 const fs = require('fs');
 const mnemonic = fs.readFileSync(".secret").toString().trim();
 const klaytn_mnemonic = fs.readFileSync(".secret_klaytn").toString().trim();
//  const mnemonic = ""
//  const klaytn_mnemonic = ""
 module.exports = {
   /**
    * Networks define how you connect to your ethereum client and let you set the
    * defaults web3 uses to send transactions. If you don't specify one truffle
    * will spin up a development blockchain for you on port 9545 when you
    * run `develop` or `test`. You can ask a truffle command to use a specific
    * network from the command line, e.g
    *
    * $ truffle test --network <network-name>
    */
 
   networks: {
     // Useful for testing. The `development` name is special - truffle uses it by default
     // if it's defined here and no other network is specified at the command line.
     // You should run a client (like ganache-cli, geth or parity) in a separate terminal
     // tab if you use this network and you must also set the `host`, `port` and `network_id`
     // options below to some value.
     //
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
     // Another network with more advanced options...
     // advanced: {
     // port: 8777,             // Custom port
     // network_id: 1342,       // Custom network
     // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
     // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
     // from: <address>,        // Account to send txs from (default: accounts[0])
     // websocket: true        // Enable EventEmitter interface for web3 (default: false)
     // },
     // Useful for deploying to a public network.
     // NB: It's important to wrap the provider as a function.
     ropsten: {
       provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/97a995af8b054a769d69779b3e022a04`),
       network_id: 3,       // Ropsten's id
       gas: 4000000,        // Ropsten has a lower block limit than mainnet
       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
       networkCheckTimeout: 1000000,
       gasPrice: 200000000000, 
       timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true,   // Skip dry run before migrations? (default: false for public nets )
       // from: '0x895EEcC6efD2B491da62126076EaCBE688BE855F'
     },
     rinkeby: {
       provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/8e822c26e3674e1a81562973d7323376`),
       network_id: 4,       // Rinkeby's id
      //  gas: 5000000,        // Rinkeby has a lower block limit than mainnet
      //  confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      //  networkCheckTimeout: 1000000,
      //  gasPrice: 200000000000, 
      //  timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true,   // Skip dry run before migrations? (default: false for public nets )
       // from: '0x895EEcC6efD2B491da62126076EaCBE688BE855F'
     },
     klaytn_testnet: {
       provider: () => new KlaytnHDWalletProvider(klaytn_mnemonic, "https://api.baobab.klaytn.net:8651"),
      //  from: '0x2f9240294a5b7790c868a496b9d1b550eab47d22',
       network_id: '1001', //Klaytn baobab testnet's network id
       gas: '8500000',
       gasPrice: null
     },
     klaytn_mainnet: {
       provider: () => new KlaytnHDWalletProvider(klaytn_mnemonic, "https://your.cypress.en.url:8651"),
       network_id: '8217', //Klaytn mainnet's network id
       gas: '8500000',
       gasPrice: null
     },
     bsc_testnet: {
       provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
       network_id: 97,
       timeoutBlocks: 200,
       skipDryRun: true
     },
     bsc_mainnet: {
       provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
       network_id: 56,
       gasPrice: 9000000000,
       timeoutBlocks: 500,
       skipDryRun: true
     },
     // Useful for private networks
     // private: {
     // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
     // network_id: 2111,   // This network is yours, in the cloud.
     // production: true    // Treats this network as if it was a public net. (default: false)
     // }
   },
 
   // Set default mocha options here, use special reporters etc.
   mocha: {
     // timeout: 100000
   },
 
   // Configure your compilers
   compilers: {
     solc: {
       version: "^0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
       // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
       //  evmVersion: "byzantium"
       }
     }
   },
 
   // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
   //
   // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
   // those previously migrated contracts available in the .db directory, you will need to run the following:
   // $ truffle migrate --reset --compile-all
 
   db: {
     enabled: false
   }
 };
 