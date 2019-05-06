// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");
var AhmedToken = artifacts.require("AhmedToken");
var Verifier = artifacts.require("Verifier");

module.exports = function(deployer) {
  // deployer.deploy(SquareVerifier);
  // deployer.deploy(SolnSquareVerifier);
  deployer.deploy(AhmedToken);
  deployer.deploy(Verifier);
};
