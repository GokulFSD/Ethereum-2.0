const Reward = artifacts.require("Manag");
const Employee = artifacts.require("Empl");
module.exports = function(deployer) {
  deployer.deploy(Reward);
  deployer.deploy(Employee);
};
