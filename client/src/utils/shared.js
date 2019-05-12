export function wrapContracts(contracts) {
  // receives a list of web3 contracts and returs a list of objects with the 
  // rights keys.
  let newContracts = [];
  for (let key in contracts) {
    newContracts.push(
      {
        "name": contracts[key][0],
        "seller": contracts[key][1],
        "buyer": contracts[key][2],
        "amount": contracts[key][3],
        "deposited": contracts[key][4],
        "shipped": contracts[key][5],
        "delivered": contracts[key][6],
      }
    );
  }
  return newContracts;
};