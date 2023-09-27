// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface Burning {
    function burning(uint256 _value) external returns (bool);
}

contract Player is ERC1155 {
    mapping(address => bool) public userActivatedOnced;
    mapping(address => bool) public userActivated;
    mapping(address => mapping(uint256 => bool)) public memberPlan;
    mapping(address => uint256) public battery;
    mapping(address => uint256) public unlockTime;
    mapping(address => uint256) public nextclaimTime;
    uint256 costValue = 2000 * 10 ** 18;
    uint256 rewardSilver = 3 * 10 ** 18;
    uint256 rewardGold = 5 * 10 ** 18;
    uint256 rewardDiamond = 7 * 10 ** 18;
    address payToken;
    address rewardToken;
    uint256 totalBurn;

    event activation(address sender);
    event reActivation(address sender);
    event gettingMembership(address sender, string class);
    event charged(address sender, uint256 burned);
    event claimed(address sender, uint256 rewardClaimed);
    event retrievingFund(address sender);

    constructor(address _payToken, address _rewardToken) ERC1155("") {
        _mint(address(this), 0, 100, "");
        _mint(address(this), 1, 100, "");
        payToken = _payToken;
        rewardToken = _rewardToken;
    }

    function activate() external {
        require(
            IERC20(payToken).transferFrom(msg.sender, address(this), costValue),
            "insufficient balance or approval"
        );
        require(
            userActivatedOnced[msg.sender] == false,
            "use reActivate function instead"
        );
        userActivatedOnced[msg.sender] = true;
        userActivated[msg.sender] = true;
        memberPlan[msg.sender][0] = true;
        unlockTime[msg.sender] = block.timestamp + 60;
        battery[msg.sender] = 3;
        nextclaimTime[msg.sender] = block.timestamp + 30;
        emit activation(msg.sender);
    }

    function reActivate() external {
        require(
            IERC20(payToken).transferFrom(msg.sender, address(this), costValue),
            "insufficient balance or approval"
        );
        userActivated[msg.sender] = true;
        memberPlan[msg.sender][0] = true;
        unlockTime[msg.sender] = block.timestamp + 30;
        emit reActivation(msg.sender);
    }

    function getMembership() external payable {
        require(userActivated[msg.sender] == true, "take the Membership");
        require(
            msg.value == 2 * 10 ** 15 || msg.value == 10 ** 15,
            "input right amount of ether"
        );
        string memory class;
        if (balanceOf(msg.sender, 0) == 0 && msg.value == 2 * 10 ** 15) {
            require(balanceOf(msg.sender, 2) == 0);
            _safeTransferFrom(address(this), msg.sender, 0, 1, "");
            _safeTransferFrom(address(this), msg.sender, 1, 1, "");
            memberPlan[msg.sender][1] = true;
            memberPlan[msg.sender][2] = true;
            battery[msg.sender] = 3;
            class = "Silver";
        } else if (balanceOf(msg.sender, 0) == 0 && msg.value == 10 ** 15) {
            require(balanceOf(msg.sender, 2) == 0);
            _safeTransferFrom(address(this), msg.sender, 0, 1, "");
            memberPlan[msg.sender][1] = true;
            battery[msg.sender] = 5;
            class = "Gold";
        } else if (balanceOf(msg.sender, 1) == 0 && msg.value == 10 ** 15) {
            _safeTransferFrom(address(this), msg.sender, 1, 1, "");
            memberPlan[msg.sender][2] = true;
            battery[msg.sender] = 7;
            class = "Diamond";
        } else {
            revert();
        }
        nextclaimTime[msg.sender] = block.timestamp + 60;
        emit gettingMembership(msg.sender, class);
    }

    function reward() external {
        require(userActivated[msg.sender] == true, "take the Membership");
        require(
            nextclaimTime[msg.sender] <= block.timestamp,
            "wait until next claim time"
        );
        require(battery[msg.sender] > 0, "please charge your battery");
        uint256 rward;
        if (memberPlan[msg.sender][2] == true) {
            IERC20(rewardToken).transfer(msg.sender, rewardDiamond);
            rward = rewardDiamond;
        } else if (memberPlan[msg.sender][1] == true) {
            IERC20(rewardToken).transfer(msg.sender, rewardGold);
            rward = rewardGold;
        } else if (memberPlan[msg.sender][0] == true) {
            IERC20(rewardToken).transfer(msg.sender, rewardSilver);
            rward = rewardSilver;
        } else {
            revert();
        }
        battery[msg.sender] -= 1;
        nextclaimTime[msg.sender] = block.timestamp + 60;
        emit claimed(msg.sender, rward);
    }

    function charge() external {
        require(userActivated[msg.sender] == true, "take the Membership");
        require(battery[msg.sender] == 0, "require to empty your battery");
        if (memberPlan[msg.sender][2] == true) {
            require(
                IERC20(rewardToken).transferFrom(
                    msg.sender,
                    address(this),
                    rewardDiamond
                ),
                "insufficient balance or approval"
            );
            require(Burning(rewardToken).burning(rewardDiamond), "");
            battery[msg.sender] = 7;
            totalBurn += 7;
        } else if (memberPlan[msg.sender][1] == true) {
            require(
                IERC20(rewardToken).transferFrom(
                    msg.sender,
                    address(this),
                    rewardGold
                ),
                "insufficient balance or approval"
            );
            require(Burning(rewardToken).burning(rewardGold), "");
            battery[msg.sender] = 5;
            totalBurn += 5;
        } else if (memberPlan[msg.sender][0] == true) {
            require(
                IERC20(rewardToken).transferFrom(
                    msg.sender,
                    address(this),
                    rewardSilver
                ),
                "insufficient balance or approval"
            );
            require(Burning(rewardToken).burning(rewardSilver), "");
            battery[msg.sender] = 3;
            totalBurn += 3;
        } else {
            revert();
        }
        emit charged(msg.sender, totalBurn);
    }

    function retrieveFund() external {
        require(userActivated[msg.sender] == true, "take the Membership");
        require(
            block.timestamp >= unlockTime[msg.sender],
            "still not passing the unlock time"
        );
        require(
            IERC20(payToken).transfer(msg.sender, costValue),
            "contract no balance"
        );
        memberPlan[msg.sender][0] = false;
        userActivated[msg.sender] = false;
        emit retrievingFund(msg.sender);
    }
}
