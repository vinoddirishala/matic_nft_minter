require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {


    defaultNetwork: "matic_testnet",
    networks: {
        hardhat: {},
        matic_testnet: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: ["8e44d3ebdcd84efda002d8113053802a0338a5f17c10343a565c1d0210512bfc"],
            gasPrice: 8000000000
        }
    },
    
    solidity: {
      version: "0.8.2"
    }

  };
