const Player = artifacts.require("Player");

module.exports = function (deployer) {
  deployer.deploy(Player, '0xe9861116f0130E5fdCde11C5be3eaDfDb2173C09','0x34CF6Ea2bdD87871A3E6652Cd3f764c848eD6017');
};
