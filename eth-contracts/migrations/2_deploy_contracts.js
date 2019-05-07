// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
// var AhmedToken = artifacts.require("AhmedToken");
var Verifier = artifacts.require("Verifier");

module.exports = async function (deployer) {
  // deployer.deploy(SquareVerifier);
  // deployer.deploy(SolnSquareVerifier);
  // deployer.deploy(AhmedToken);
  await deployer.deploy(Verifier)
  await deployer.deploy(SolnSquareVerifier, Verifier.address)

  // console.log('# Verifier address: %s', Verifier.address)
  // console.log('# Verifier transaction: %s', Verifier.transactionHash)
  // // console.log(Verifier.abi)

  // console.log('# SolnSquareVerifier address: %s', SolnSquareVerifier.address)
  // console.log('# SolnSquareVerifier transaction: %s', SolnSquareVerifier.transactionHash)
  // // console.log(SolnSquareVerifier.abi)
};
