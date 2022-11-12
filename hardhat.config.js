require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/61ednU3Ui_LeqTQQQWUQaNMhe-HOmAtM",
      accounts: [ '6d16d87141a206b6fdca97aaacfd76b92d90b49272318d6a7eeb69f2beafeff4' ]
    }
  }
}
