const Migrations = artifacts.require("Migrations");
const FantasyGarage = artifacts.require("FantasyGarage");
const ERC721A = artifacts.require("ERC721A");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(FantasyGarage);
  deployer.deploy(ERC721A);
};
