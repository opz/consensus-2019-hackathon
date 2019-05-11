pragma solidity ^0.5.2;

import './RefundEscrow.sol';

contract ProductContract {
    enum DeliveryStatus { NotYet, Delivered, Failed }

    RefundEscrow private _escrow;

    string public name;
    address payable public seller;
    address payable public buyer;
    uint public amount;
    bool public shipped;
    DeliveryStatus delivered;

    constructor(address payable _seller, string memory _name) public {
        name = _name;
        seller = _seller;
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

    function sendFunds() external onlyBuyer payable {
        require(msg.value > 0);

        amount = msg.value;
        _escrow.deposit.value(amount)(buyer);
    }

    function setDelivered(DeliveryStatus _delivered) external onlyBuyer {
        delivered = _delivered;

        if (delivered == DeliveryStatus.Failed) {
            _escrow.enableRefunds();
        } else {
            _escrow.disableRefunds();
        }
    }

    function setShipped(bool _shipped) external onlySeller {
        shipped = _shipped;
    }

    function setBuyer(address payable _buyer) public payable onlySeller {
        buyer = _buyer;
        // set buyerToContract mapping in factory
    }

    function withdrawToSeller() public onlySeller {
        require(shipped == true);
        require(delivered == DeliveryStatus.Delivered);
        require(depoOf() >= amount);
        _escrow.close();
        _escrow.beneficiaryWithdraw();
    }

    function withdrawToBuyer() public onlyBuyer {
        require(shipped == true);
        require(delivered == DeliveryStatus.Failed);
        _escrow.withdraw(buyer);
    }

    function depoOf() public view returns (uint256) {
        return _escrow.depositsOf(buyer);
    }

    function getDetails()
        external
        view
        onlyBuyer
        onlySeller
        returns (string memory, address, address, uint, bool, DeliveryStatus)
    {
        return (name, seller, buyer, amount, shipped, delivered);
    }
}
