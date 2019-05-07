pragma solidity ^0.5.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import './ERC721Mintable.sol';
import './verifier.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

contract MyVerifier is Verifier {

}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is AhmedToken {

    using SafeMath for uint256;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 _index;
        address _address;
    }

    // TODO define an array of the above struct
    // Solution[] solutions;
    uint256 solutionCount = 0;

    // TODO define a mapping to store unique solutions submitted
    mapping (bytes32 => Solution) uniqueSolutions;

    MyVerifier myVerifier;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 _index, address _address, bytes32 _key);


    constructor (address contractVerifierAddress) public {
        myVerifier = MyVerifier(contractVerifierAddress);
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint256 _index, address _address) public {
        bytes32 _key = keccak256(abi.encode(_index, _address));
        require(uniqueSolutions[_key]._address == address(0), 'the solution has been added');
        uniqueSolutions[_key] = Solution(_index, _address);
        solutionCount = solutionCount.add(1);
        emit SolutionAdded(_index, _address, _key);
    }

    function getSolutionCount() public returns(uint256){
        return solutionCount;
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintNFT(
            address to,
            uint256 tokenId,
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input
        ) public returns(bool) {
            require(myVerifier.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input) == true , 'the verification is not correct');
            addSolution(tokenId, to);
            return super.mint(to, tokenId);
    }
}


