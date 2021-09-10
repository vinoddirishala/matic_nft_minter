const hre = require("hardhat");

const WALLET_ADDRESS = "0x6406B6De73d037A12Db9B3a97B9b4b4E0C84D3aE";
const CONTRACT_ADDRESS = "0x53e99f791102b8D3dbbC51fb4cAFF3288bFCbCc1";



async function main(_URI) {


    const NFT = await ethers.getContractFactory("MT");

    console.log("Minting is in progress...!!");

    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract._safeMint(WALLET_ADDRESS).then((txn) => {
        // Log Txn
    
        console.log("txn hash: "+txn.hash)
        return(txn)
    });

}