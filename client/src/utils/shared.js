export function wrapContracts(contracts, web3ContractObjects, web3) {
  // receives a list of web3 contracts and returs a list of objects with the 
  // rights keys.
  let newContracts = [];
  for (let key in contracts) {
    newContracts.push(
      {
        "name": contracts[key][0],
        "seller": contracts[key][1],
        "buyer": contracts[key][2],
        "amount": web3.utils.fromWei(String(contracts[key][3]), "ether"),
        "deposited": web3.utils.fromWei(String(contracts[key][4]), "ether"),
        "shipped": contracts[key][5],
        "delivered": contracts[key][6],
        "object": web3ContractObjects[key],
      }
    );
  }
  return newContracts;
};

export function getDeliveredText(enumValue) {
  if (enumValue === 0) {
    return "In Progress";
  }
  if (enumValue === 1) {
    return "Success";
  }
  return "Failure";
};
