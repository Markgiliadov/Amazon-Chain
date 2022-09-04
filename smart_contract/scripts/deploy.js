// const { verify } = require("../utils/verify");
const { run } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  const CropContract = await hre.ethers.getContractFactory("CropContract");
  const deployArgs = [
    2,
    1,
    "0xede0a5142b1459e3c138b017FA178515e10a4002",
    "0x16e5BE4A727Fa6BE2B91E383852ED14CB457a699",
    15,
    25,
    60,
  ];
  const cropContract = await CropContract.deploy(...deployArgs);
  //new token
  // await cropContract.deployed();

  // const DevToken = await hre.ethers.getContractFactory("AmazonToken");
  // const devToken = await DevToken.deploy("1000000000000000000000000000");

  // await devToken.deployed();

  // console.log("Token deployed to:", devToken.address);
  //new token
  console.log("cropContract address: ", cropContract.address);

  console.log("==============================\n");
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Verifying...");
    await cropContract.deployTransaction.wait(6);
    await verify(cropContract.address, deployArgs);
  }
};
async function verify(contractAddress, args) {
  console.log("verifying contract..");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(error);
    }
  }
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
