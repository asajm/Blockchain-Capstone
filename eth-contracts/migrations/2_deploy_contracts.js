// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");
var ERC721Mintable = artifacts.require("AhmedToken");

module.exports = function(deployer) {
  // deployer.deploy(SquareVerifier);
  // deployer.deploy(SolnSquareVerifier);
  deployer.deploy(ERC721Mintable);
};
