var AhmedToken = artifacts.require('AhmedToken');

contract('AhmedToken', accounts => {
    console.log('1')
    const owner = accounts[0];
    const account_one = accounts[1];
    const account_two = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await AhmedToken.new({from: owner});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1, {from: owner})
            await this.contract.mint(account_one, 2, {from: owner})
            await this.contract.mint(account_one, 3, {from: owner})
            await this.contract.mint(account_two, 4, {from: owner})
            await this.contract.mint(account_two, 5, {from: owner})

        })

        it('should return total supply', async function () {
            assert.equal(await this.contract.totalSupply(), 5, 'the total supply is not correct')
        })

        it('should get token balance', async function () {
            assert.equal(await this.contract.balanceOf(account_one), 3, 'account_one has to have 3 tokens')
            assert.equal(await this.contract.balanceOf(account_two), 2, 'account_two has to have 2 tokens')
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            url_1 = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1'
            url_2 = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2'
            assert.equal(await this.contract.tokenURI(1), url_1, 'the return token uri for (1) is not correct')
            assert.equal(await this.contract.tokenURI(2), url_2, 'the return token uri for (2) is not correct')
        })

        it('should transfer token from one owner to another', async function () {
            await this.contract.transferFrom(account_one, account_two, 3, {from: account_one})
            assert.equal(await this.contract.balanceOf(account_one), 2, 'account_one has to have 2 tokens after transfering')
            assert.equal(await this.contract.balanceOf(account_two), 3, 'account_two has to have 3 tokens after transfering')
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await AhmedToken.new({from: owner});
        })

        it('should fail when minting when address is not contract owner', async function () {
            success = false
            try {
                await this.contract.mint(account_two, 6, {from: account_one})
            } catch (error) {
                success = true
            }
            assert.equal(success, true, 'minting has to be done by only the owner')
        })

        it('should return contract owner', async function () {
            assert.equal(await this.contract.owner(), owner, 'the owner of contract is not correct')
        })
    });
})