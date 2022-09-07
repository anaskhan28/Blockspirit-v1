// 

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks:{
    Goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/3_F2GvWY2OE9G6xESBEQPxGTEE8ZtRSp',
      accounts:['2603003a40bd4d7cebc2c5add66ce62c98433cde006cbfbfd93d4293b2e75c9e']
    }

  }
}