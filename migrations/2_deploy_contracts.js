var ProductContract = artifacts.require("ProductContract");

module.exports = function(deployer) {
  deployer.deploy(ProductContract, 'Test name');
};
