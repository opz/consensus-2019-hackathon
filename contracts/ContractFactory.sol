pragma solidity ^0.5.2;

import './ProductContract.sol';

contract ContractFactory {
    mapping(address => address[]) public sellerToContracts;
    mapping(address => address[]) public buyerToContracts;

    function createContract(string calldata name, address payable buyer)
        external
    {
        require(msg.sender != buyer, 'Seller and Buyer cannot be the same address');

        ProductContract pcontract = new ProductContract(
            msg.sender,
            buyer,
            name
        );
        sellerToContracts[msg.sender].push(address(pcontract));
        buyerToContracts[msg.sender].push(address(pcontract));
    }

    function getSellerContracts(address seller)
        external
        view
        returns (address[] memory)
    {
        return sellerToContracts[seller];
    }

    function getBuyerContracts(address buyer)
        external
        view
        returns (address[] memory)
    {
        return buyerToContracts[buyer];
    }
}
