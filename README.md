# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

# Test Contract

1. `cd <project path>`
2. `npm install`.
3. changing solidity version from (`pragma solidity ^0.5.2;`) to (`pragma solidity ^0.5.0;`) on the following contracts:-
    * `openzeppelin-solidity/contracts/utils/Address.sol`.
    * `openzeppelin-solidity/contracts/math/SafeMath.sol`.
    * `openzeppelin-solidity/contracts/drafts/Counters.sol`.
    * `openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol`.
4. running Ethereum client e.g. "Ganache" on `HTTP://127.0.0.1:7545`.
5. `cd eth-contracts/`
6. `rm -rf build/ && truffle compile && truffle migrate --reset && truffle test`.
7. `rm -rf build/ && truffle compile && truffle migrate --reset --network rinkeby`.

# Contract Details
## Deploying 'Verifier'
* contract address: `0x32545Eea4dDf2f5186AEa032b7068C12Fc219A91`
* transaction hash: `0x6a5a5142aeedddb4fd422c1ebce36b9cdfe3b714353d8cdebb54dbde96169e6f`
* Abi: inside `eth-contracts/build/contracts/Verifier.json`

## Deploying 'SolnSquareVerifier'
* contract address: `0x3DD99314aDb4D46F864B00500d01FfE27A26F04e`
* transaction hash: `0x1c34bb66755db2e8e943cf0c9f77eec8d2b5dd71e3997908859b7331525b574e`
* Abi: inside `eth-contracts/build/contracts/SolnSquareVerifier.json`

## MarketPlace Storefront link's
* https://rinkeby.opensea.io/category/ahmedtoken

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
