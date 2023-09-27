// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract RewardX is ERC20, ERC20Burnable {
    address owner;

    constructor() ERC20("RewardX", "RX") {
        _mint(msg.sender, 1000 * 10 ** decimals());
        owner = msg.sender;
    }

    function setOwner(address newOwner) public {
        require(
            msg.sender == owner,
            "Only the current owner can change the owner."
        );
        owner = newOwner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function burning(uint256 _value) public onlyOwner returns (bool) {
        require(_value <= balanceOf(msg.sender), "Burn amount exceeds balance");
        _burn(msg.sender, _value);
        return true;
    }
}
