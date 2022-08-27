const { deployments, ethers } = require("hardhat")
const { assert, expect } = require("chai")

describe("BasicNFT", function () {
  let basicNft, deployer, accounts
  const TOKEN_URI = "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json";


  beforeEach(async function() {
    deployer = (await getNamedAccounts()).deployer
    basicNft = await ethers.getContract("BasicNFT", deployer)
  })
  
  describe("mint", async function(){
    it("mints a nft", async function() {
      const response = await basicNft.mintNft()
      assert.equal(response, 1)
    })
  })
  
});
