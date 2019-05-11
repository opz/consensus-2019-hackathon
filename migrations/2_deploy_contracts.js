var ContractFactory = artifacts.require("ContractFactory");

module.exports = function(deployer) {
  deployer.deploy(ContractFactory);
};
