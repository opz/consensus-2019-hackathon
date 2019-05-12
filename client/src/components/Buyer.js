import React, { Component } from "react";
import withWeb3 from "../utils/withWeb3";
import {
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBContainer,
} from "mdbreact";
import withContract from "../utils/withContract";
import ContractFactory from "../contracts/ContractFactory.json";
import ProductContract from "../contracts/ProductContract.json";
import active from '../dist/images/active.png';
import failed from '../dist/images/failed.png';
import passing from '../dist/images/passing.png';
import pend from '../dist/images/pend.png';
import success from '../dist/images/success.png';
import { wrapContracts } from '../utils/shared';

class Buyer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractName: "",
      buyerAddress: "",
      contracts: {},
    };

    this.handleContractNameChange = this.handleContractNameChange.bind(this);
    this.handleBuyerAddressChange = this.handleBuyerAddressChange.bind(this);
    //this.handleCreateContract = this.handleCreateContract.bind(this);
  }

  handleContractNameChange(e) {
    this.setState({ contractName: e.target.value });
  };

  handleBuyerAddressChange(e) {
    this.setState({ buyerAddress: e.target.value });
  };

  async componentDidUpdate(prevProps) {
    if (this.props.factory !== prevProps.factory) {
      try {
        const contracts = await this.props.factory.methods.getBuyerContracts(this.props.accounts[0]).call();
        const results = await Promise.all(
          Array.from(Array(contracts.length).keys()).reverse().map(index => {
            const contract = new this.props.web3.eth.Contract(
              ProductContract.abi,
              contracts[index],
            );
            return contract.methods.getDetails().call();
          })
        );
        //wcontracts = wrapContracts(results);

        this.setState({ contracts: wrapContracts(results) });
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    let contractRows = [];
    for (let key in this.state.contracts) {
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
            <img className="status-step-icon" src={pend}></img>
          </td>
        </tr>)
    };

    return (
      <MDBContainer fluid>
        <MDBCardHeader className="mx-auto float-none z-depth-1 w-75 p-3 py-2 px-2" tag="h4">Buyer</MDBCardHeader>
        <div className="card card-cascade narrower w-75 mx-auto float-none">
          <div
            className="view view-cascade gradient-card-header blue-gradient narrower d-flex justify-content-between align-items-center">
            <div>
              {/* <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-th-large mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-columns mt-0"></i>
              </button> */}
            </div>
            <a href="" className="white-text mx-3">Contracts on Escrow</a>
            <div>
              {/* <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-pencil-alt mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="far fa-trash-alt mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-info-circle mt-0"></i>
              </button> */}
            </div>

          </div>

          <div className="px-4">

            <div className="table-wrapper table-responsive">
              <table className="table table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th>
                      <input className="form-check-input" type="checkbox" id="checkbox" />
                      <label className="form-check-label" for="checkbox" className="mr-2 label-table"></label>
                    </th>
                    <th className="th-lg">
                      <a>  Name
                        <i className="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th className="th-lg">
                      <a href=""> Amount
                        <i className="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th className="th-lg">
                      <a href=""> Deposited
                        <i className="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th className="th-lg">
                      <a href=""> Status
                        <i className="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contractRows}
                  {/* <tr>
                    <th scope="row">
                      <input className="form-check-input" type="checkbox" id="checkbox1" />
                      <label className="form-check-label" for="checkbox1" className="label-table"></label>
                    </th>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>
                      <img className="status-step-icon" src={pend}></img>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row" data-toggle="collapse" data-target="#collapseExample"
                      aria-expanded="false" aria-controls="collapseExample">
                      <input className="form-check-input" type="checkbox" id="checkbox2" />
                      <label className="form-check-label" for="checkbox2" className="label-table"></label>
                    </th>
                    <td>Jacob</td>
                    <td>@fat</td>
                    <td>Jacob</td>
                    <td><img className="status-step-icon" src={active}></img></td>
                    

                    <div className="collapse" id="collapseExample">

                    </div>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input className="form-check-input" type="checkbox" id="checkbox3" />
                      <label className="form-check-label" for="checkbox3" className="label-table"></label>
                    </th>
                    <td>Larry</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td><img class="status-step-icon" src={failed}></img></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input className="form-check-input" type="checkbox" id="checkbox4" />
                      <label className="form-check-label" for="checkbox4" className="label-table"></label>
                    </th>
                    <td>Paul</td>
                    <td>@P_Topolski</td>
                    <td>Paul</td>
                    <td><img className="status-step-icon" src={passing}></img></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input className="form-check-input" type="checkbox" id="checkbox5" />
                      <label className="form-check-label" for="checkbox5" className="label-table"></label>
                    </th>
                    <td>Larry</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td><img className="status-step-icon" src={success}></img></td>
                  </tr> */}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </MDBContainer>
    );
  }
}


export default withWeb3(withContract(ContractFactory, 'factory')(Buyer));
