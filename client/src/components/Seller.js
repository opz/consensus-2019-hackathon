import React, { Component } from "react";
import withWeb3 from "../utils/withWeb3";
import withContract from "../utils/withContract";
import ContractFactory from "../contracts/ContractFactory.json";
import ProductContract from "../contracts/ProductContract.json";
import { wrapContracts } from '../utils/shared';
import ContractList from "./ContractList";
import web3 from 'web3';
import {
  Card,
  CardBody,
  Col,
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBRow,
  Row,
  Table,
  TableBody,
  TableHead,
} from "mdbreact";


class Seller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractName: "",
      buyerAddress: "",
      contracts: {},
    };

    this.handleContractNameChange = this.handleContractNameChange.bind(this);
    this.handleBuyerAddressChange = this.handleBuyerAddressChange.bind(this);
    this.handleCreateContract = this.handleCreateContract.bind(this);
    this.handleShippedChange = this.handleShippedChange.bind(this);
    this.handleWithdrawFunds = this.handleWithdrawFunds.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleContractNameChange(e) {
    this.setState({ contractName: e.target.value });
  };

  handleBuyerAddressChange(e) {
    this.setState({ buyerAddress: e.target.value });
  };

  handleCreateContract(e) {
    e.preventDefault(this.props.accounts);
    try {
      this.props.factory.methods.createContract(
        this.state.contractName,
        this.state.buyerAddress,
      ).send({
        "from": this.props.accounts[0],
      });
    } catch (e) {
      console.log(e);
    }
  };
  
  handleShippedChange(e, contract) {
    contract.methods.setShipped(e.target.value).send({
      "from": this.props.accounts[0],
    });
  };

  handleWithdrawFunds(e, contract) {
    contract.methods.withdrawToSeller().send({
      "from": this.props.accounts[0],
    });
  };

  handleAmountChange(e, contract) {
    if (e.key === 'Enter') {
      //etherAmount = web3.utils.fromWei(strinVal, "ether");
      const weiNumber = web3.utils.toWei(e.target.value, "ether");
      contract.methods.setAmount(weiNumber).send({
        "from": this.props.accounts[0],
      });
    }
  }


  async componentDidUpdate(prevProps) {
    if (this.props.factory !== prevProps.factory) {
      try {
        const contractsHashes = await this.props.factory.methods.getSellerContracts(this.props.accounts[0]).call();
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
        let w = wrapContracts(results, web3ContractObjects);
        this.setState({ contracts: w });
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
            <MDBCol className="mx-auto float-none ">
            <MDBCardHeader className="mx-auto card-header float-none z-depth-1 w-75 p-3 py-2 px-2" tag="h4">Create a Contract</MDBCardHeader>
            <MDBCard className="mb-5 mx-auto float-none white z-depth-1 w-75 p-3">
              <div className="card-body">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" value={this.state.contractName} onChange={this.handleContractNameChange}/>
                </div>
                  <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Address" value={this.state.buyerAddress} onChange={this.handleBuyerAddressChange}/>
                  
                <MDBBtn className="px-2 ml-2 mr-2 btn-md w-50" block id="create-new-contract" onClick={this.handleCreateContract}>
                  Create New Contract
                </MDBBtn>
              </div>
            </MDBCard>
            </MDBCol>
          </MDBRow>

        <hr className="my-2" />
          <Row >
            <Col md="12">
              <ContractList 
                contracts={this.state.contracts} 
                handleShippedChange={this.handleShippedChange}
                handleWithdrawFunds={this.handleWithdrawFunds}
                handleAmountChange={this.handleAmountChange}
              />
            </Col>
          </Row>

      </MDBContainer>
    );
  }
}

export default withWeb3(withContract(ContractFactory, 'factory')(Seller));
