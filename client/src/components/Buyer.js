import React, { Component } from "react";
import withWeb3 from "../utils/withWeb3";
import withContract from "../utils/withContract";
import ContractFactory from "../contracts/ContractFactory.json";
import PrettyContractList from "./PrettyContractList";
import ProductContract from "../contracts/ProductContract.json";
import { wrapContracts } from '../utils/shared';

class Buyer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractName: "",
      buyerAddress: "",
      contracts: {},
    };
    this.handleWithdraw = this.handleWithdraw.bind(this);
    this.handleSendMoney = this.handleSendMoney.bind(this);
    this.handleDeliveryChange = this.handleDeliveryChange.bind(this);
  }

  async componentDidUpdate(prevProps) {
    if (this.props.factory !== prevProps.factory) {
      try {
        const contractsHashes = await this.props.factory.methods.getBuyerContracts(this.props.accounts[0]).call();
        let web3ContractObjects = [];
        const results = await Promise.all(
          Array.from(Array(contractsHashes.length).keys()).reverse().map(index => {
              //create a contract instance from address
              const contract = new this.props.web3.eth.Contract(
                ProductContract.abi,
                contractsHashes[index],
              );
              web3ContractObjects.push(contract);
              return contract.methods.getDetails().call();
            })
        );
        let w = wrapContracts(results, web3ContractObjects, this.props.web3);
        this.setState({ contracts: w });
      } catch (e) {
        console.log(e);
      }
    }
  }

  handleSendMoney(e, contract) {
    //convertToWei
    contract.methods.sendFunds(e.target.value).send({
      "from": this.props.accounts[0],
    });
  };

  handleWithdraw(contract) {
    contract.methods.withdrawToBuyer().send({
      "from": this.props.accounts[0],
    });
  };

  handleDeliveryChange(e, contract) {
    contract.methods.setDelivered(e.target.value).send({
      "from": this.props.accounts[0],
    });
  };

  render() {
    let contractRows = [];
    for (let key in this.state.contracts) {
      console.log(this.state.contracts[0]["amount"]);
      contractRows.push(
        <tr>
          <th scope="row">
            <input className="form-check-input" type="checkbox" id="checkbox1" />
            <label className="form-check-label" for="checkbox1" className="label-table"></label>
          </th>
          <td>{this.state.contracts[key]["name"]}</td>
          <td>{this.state.contracts[key]["amount"]}</td>
          <td>{this.state.contracts[key]["deposited"]}</td>
          <td>
            {/* <img className="status-step-icon" src={pend}></img> */}
          </td>
        </tr>)
    };

    return (
      <PrettyContractList
      contracts={this.state.contracts}
      handleSendMoney={this.handleSendMoney}
      handleWithdraw={this.handleWithdraw}
      handleDeliveryChange={this.handleDeliveryChange} />
    );
  }
}

export default withWeb3(withContract(ContractFactory, 'factory')(Buyer));
