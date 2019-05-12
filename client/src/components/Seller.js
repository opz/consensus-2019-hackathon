import React, { Component } from "react";
import withWeb3 from "../utils/withWeb3";
import withContract from "../utils/withContract";
import ContractFactory from "../contracts/ContractFactory.json";
import ProductContract from "../contracts/ProductContract.json";
import { wrapContracts } from '../utils/shared';
import ContractList from "./ContractList";
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

  handleAmount(){
    //etherAmount = web3.utils.fromWei(strinVal, "ether");
    //giantN = web3.utils.toWei(strinVal, "ether");use to set
    
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
        <MDBFreeBird>
        <MDBRow>
            <MDBCol className="mx-auto float-none ">
              <MDBCard className="mx-auto float-none white z-depth-1">
                <MDBCardHeader className="py-2 px-2" color="primary-color" tag="h4"> Add a contract </MDBCardHeader>
                <div className="card-body">
                  <form
                    className="needs-validation"
                    onSubmit={this.handleCreateContract}
                    noValidate>
                    <div >
                      <MDBInput size="sm" className="px-2" label="Name"
                        required icon="user" type="email" value={this.state.contractName} onChange={this.handleContractNameChange} />
                      <MDBInput size="sm" className="px-2" label="Buyer address"
                        required icon="lock" onChange={this.handleBuyerAddressChange} value={this.state.buyerAddress} />
                    </div>
                    <div className="text-center mt-3">
                      <MDBBtn
                        color="primary"
                        type="submit">
                        Create Contract
                      </MDBBtn>
                    </div>
                  </form>
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
              />
            </Col>
          </Row>
        </MDBFreeBird>

      </MDBContainer>
    );
  }
}

export default withWeb3(withContract(ContractFactory, 'factory')(Seller));
