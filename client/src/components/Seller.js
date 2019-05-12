import React, { Component } from "react";
import withWeb3 from "../utils/withWeb3";
import withContract from "../utils/withContract"
import ContractFactory from "../contracts/ContractFactory.json"
import ProductContract from "../contracts/ProductContract.json"
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
  }

  async componentDidUpdate(prevProps) {
    if (this.props.factory !== prevProps.factory) {
      try {
        const contracts = await this.props.factory.methods.getSellerContracts(this.props.accounts[0]).call();
        console.log(contracts);
        const results = await Promise.all(
          Array.from(Array(contracts.length).keys()).reverse().map(index => {
              //create a contract instance from address
              console.log("before");
              const contract = new this.props.web3.eth.Contract(
                ProductContract.abi,
                contracts[index],
              );
              console.log("after");
              return contract.methods.getDetails().call();
            })
        );
        console.log(results);
        this.setState({ contracts: results });
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    let contractRows = [];
    let index = 0;
    for (let key in this.state.contracts) {
      contractRows.push(
        {
          id: index += 1,
          heading0: this.state.contracts[key],
        })
    };

    const columns = [
      {
        label: "#",
        field: "id",
        sort: "asc"
      },
      {
        label: "Name",
        field: "heading0",
        sort: "asc"
      },
    ];

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
              <Card>
                <CardBody>
                  <h2 className="h2-responsive pb-4">Your Accounts</h2>
                  <Table responsive small>
                    <TableHead
                      columns={columns}
                      color="primary-color"
                      textWhite
                    />
                    <TableBody rows={contractRows}
                    />
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </MDBFreeBird>

      </MDBContainer>
    );
  }
}

export default withWeb3(withContract(ContractFactory, 'factory')(Seller));
