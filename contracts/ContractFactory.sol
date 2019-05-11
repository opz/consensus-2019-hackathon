pragma solidity ^0.5.2;

import './ProductContract.sol';

contract ContractFactory {
    mapping(address => address[]) public sellerToContracts;

    function createContract(string calldata name) external {
        ProductContract pcontract = new ProductContract(msg.sender, name);
        sellerToContracts[msg.sender].push(address(pcontract));
    }
}
