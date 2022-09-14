require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const GOERLI_PK = process.env.GOERLI_PRIVATE_KEY;
const ETHERSCAN_PK = process.env.YOUR_ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_PK]
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_PK
  }
};