let Verifier = artifacts.require('Verifier');
let SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
let proof = require('../../zokrates/code/square/proof').proof
let input = require('../../zokrates/code/square/proof').input
var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545/'));


contract('SolnSquareVerifier', accounts => {
    const owner = accounts[0];
    const account_one = accounts[1];

    describe("The test cases in 'SolnSquareVerifier.js'", function () {
        beforeEach(async function () {
            let verifier = await Verifier.new({ from: owner });
            this.contract = await SolnSquareVerifier.new(verifier.address, { from: owner });
        })

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('Test if a new solution can be added for contract - SolnSquareVerifier', async function () {

            let oldCount = await this.contract.getSolutionCount.call()
            // console.log(oldCount)

            try {
                let result = await this.contract.addSolution(1, account_one)
                // console.log(result.logs)
            } catch (error) {
                // console.log(error)
            }

            let newCount = await this.contract.getSolutionCount.call()
            // console.log(newCount)

            oldCount = parseInt(oldCount)
            newCount = parseInt(newCount)

            // console.log('old count = %s\nnew count = %s', parseInt(oldCount), parseInt(newCount))
            assert.equal(newCount, oldCount + 1, 'the solutions has to be increased 1')

        })

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {
            let result = false
            try {
                result = await this.contract.mintNFT.call(
                    account_one,
                    2,
                    proof.A,
                    proof.A_p,
                    proof.B,
                    proof.B_p,
                    proof.C,
                    proof.C_p,
                    proof.H,
                    proof.K,
                    input,
                    { from: owner })
                // console.log(result)
            } catch (error) {
                console.log(error)
            }
            assert.equal(result, true, 'the solutions has to be increased 1')
        })
    });
})