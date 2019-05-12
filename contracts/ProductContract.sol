pragma solidity ^0.5.2;

import 'openzeppelin-solidity/contracts/math/SafeMath.sol';
import './RefundEscrow.sol';

contract ProductContract {
    using SafeMath for uint256;
    enum DeliveryStatus { NotYet, Delivered, Failed }

    RefundEscrow private _escrow;

    string public name;
    address payable public seller;
    address payable public buyer;
    uint256 public amount;
    bool public shipped;
    DeliveryStatus delivered;

    constructor(
        address payable _seller,
        address payable _buyer,
        string memory _name
    ) public {
        name = _name;
        seller = _seller;
        buyer = _buyer;
        _escrow = new RefundEscrow(seller);
    }

    modifier onlyBuyer() {
        require(msg.sender == buyer, "User is not the Buyer");
        _;
    }

    modifier onlySeller() {
        require(msg.sender == seller, "User is not the Seller");
        _;
    }

    modifier onlyBuyerAndSeller() {
        require(
            msg.sender == seller || msg.sender == buyer,
            "User is not the Seller or Buyer"
        );

        _;
    }

    function sendFunds() external onlyBuyer payable {
        require(msg.value > 0);

        _escrow.deposit.value(msg.value)(buyer);
    }

    function setName(string calldata _name) external onlySeller {
        name = _name;
    }

    function setAmount(uint256 _amount) external onlySeller {
        amount = _amount;
    }

    function setDelivered(DeliveryStatus _delivered) external onlyBuyer {
        if (_delivered == DeliveryStatus.Failed) {
            _escrow.enableRefunds();
        } else if (delivered == DeliveryStatus.Failed) {
            _escrow.disableRefunds();
        }

        delivered = _delivered;
    }

    function setShipped(bool _shipped) external onlySeller {
        shipped = _shipped;
    }

    function withdrawToSeller() external onlySeller {
        require(shipped == true);
        require(delivered == DeliveryStatus.Delivered);
        require(deposits() >= amount);
        _escrow.close();
        _escrow.beneficiaryWithdraw();
    }

    function withdrawToBuyer() external onlyBuyer {
        require(shipped == true);
        require(delivered == DeliveryStatus.Failed);
        _escrow.withdraw(buyer);
    }

    function deposits() public view returns (uint256) {
        return _escrow.depositsOf(buyer);
    }

    function getDetails()
        external
        view
        onlyBuyerAndSeller
        returns (
            string memory, 
            address, 
            address, 
            uint256, 
            uint256, 
            bool, 
            DeliveryStatus
        )
    {
        return (name, seller, buyer, amount, deposits(), shipped, delivered);
    }
}
