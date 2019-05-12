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
import failed from '../dist/images/failed.png'
import pending from '../dist/images/pending.png'
import success from '../dist/images/success.png'

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

  expandRow(el) {
    console.log(el.currentTarget, el.currentTarget.classList);
    if (el.currentTarget.classList.contains('collapsed')) {
      //reveal
      el.currentTarget.nextSibling.classList.remove('hidden-details');
      el.currentTarget.classList.remove('collapsed');
      el.currentTarget.classList.add('grey-background');
    } else {
      //hide
      el.currentTarget.classList.add('collapsed');
      el.currentTarget.nextSibling.classList.add('hidden-details');
      el.currentTarget.classList.remove('grey-background');
    }
  };

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
            {/* <img className="status-step-icon" src={pend}></img> */}
          </td>
        </tr>)
    };

    return (
      <MDBContainer fluid>
        <MDBCardHeader className="mx-auto card-header float-none z-depth-1 w-75 p-3 py-2 px-2" tag="h4">Buyer</MDBCardHeader>
        <MDBCard className="mb-5 mx-auto float-none white z-depth-1 w-75 p-3">
          <div className="card-body">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">@</span>
              </div>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
              <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Address"/>
              
            <MDBBtn className="px-2 ml-2 mr-2 btn-md w-50" block id="create-new-contract">
              Create New Contract
            </MDBBtn>
          </div>
        </MDBCard>
        <MDBCardHeader className="mx-auto card-header float-none z-depth-1 w-75 p-3 py-2 px-2" tag="h4">Contracts</MDBCardHeader>
        <div className="card card-cascade narrower w-75 mx-auto float-none">
          <div className="px-4">

            <div className="table-wrapper table-responsive">
              <table className="table table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th className="th-lg">
                      <a>Name
                        <i className="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th className="th-lg">
                      <a href="">Amount
                        <i className="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th className="th-lg">
                      <a href="">Address
                        <i className="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th className="th-md">
                      <a href="">Status
                        <i className="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={(e) => this.expandRow(e)} className="collapsed">
                    
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>
                      <img className="status-step-icon" src={pending}></img>
                    </td>
                  </tr>
                  
                  <tr className="expanded-details hidden-details">
              <th></th>
              <td colSpan="4">
                <button type="button" className="btn  blue-background-button">Withdraw</button>
                <button type="button" className="btn  blue-background-button">Send</button>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitches"/>
                  <label className="custom-control-label" for="customSwitches">Shipment</label>
                </div>
                <select class="browser-default custom-select">
                  <option selected>Delivery</option>
                  <option value="1">Success</option>
                  <option value="2">In Progress...</option>
                  <option value="3">Failure</option>
                </select>
               </td>
               </tr>
                  
                  <tr onClick={(e) => this.expandRow(e)} className="collapsed">
                      <td>Jacob</td>
                      <td>@fat</td>
                      <td>Jacob</td>
                      <td><img className="status-step-icon" src={success}></img></td>
                  </tr>
              <tr className="expanded-details hidden-details">
              <th></th>
              <td colSpan="4">
              <button type="button" className="btn  blue-background-button">Withdraw</button>
                <button type="button" className="btn  blue-background-button">Send</button>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitches2"/>
                  <label className="custom-control-label" for="customSwitches2">Shipment</label>
                </div>
                <select class="browser-default custom-select">
                  <option selected>Delivery</option>
                  <option value="1">Success</option>
                  <option value="2">In Progress...</option>
                  <option value="3">Failure</option>
                </select>
               </td>
               </tr>
                  <tr onClick={(e) => this.expandRow(e)} className="collapsed">
                    
                    <td>Larry</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td><img className="status-step-icon" src={failed}></img></td>
                  </tr>
                  <tr className="expanded-details hidden-details">
              <th></th>
              <td colSpan="4">
              <button type="button" className="btn  blue-background-button">Withdraw</button>
                <button type="button" className="btn  blue-background-button">Send</button>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitches3"/>
                  <label className="custom-control-label" for="customSwitches3">Shipment</label>
                </div>
                <select class="browser-default custom-select">
                  <option selected>Delivery</option>
                  <option value="1">Success</option>
                  <option value="2">In Progress...</option>
                  <option value="3">Failure</option>
                </select>
               </td>
               </tr>
                  <tr onClick={(e) => this.expandRow(e)} className="collapsed">
                    <td>Paul</td>
                    <td>@P_Topolski</td>
                    <td>Paul</td>
                    <td><img className="status-step-icon" src={pending}></img></td>
                  </tr>
                  <tr className="expanded-details hidden-details">
              <th></th>
              <td colSpan="4">
              <button type="button" className="btn  blue-background-button">Withdraw</button>
                <button type="button" className="btn  blue-background-button">Send</button>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitches4"/>
                  <label className="custom-control-label" for="customSwitches4">Shipment</label>
                </div>
                <select class="browser-default custom-select">
                  <option selected>Delivery</option>
                  <option value="1">Success</option>
                  <option value="2">In Progress...</option>
                  <option value="3">Failure</option>
                </select>
               </td>
               </tr>
                  <tr onClick={(e) => this.expandRow(e)} className="collapsed">
                    <td>Larry</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td><img className="status-step-icon" src={success}></img></td>
                  </tr>
                  <tr className="expanded-details hidden-details">
              <th></th>
              <td colSpan="5">
              <button type="button" className="btn blue-background-button">Withdraw</button>
                <button type="button" className="btn blue-background-button">Send</button>
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitches5"/>
                  <label className="custom-control-label" for="customSwitches5">Shipment</label>
                </div>
                <select class="browser-default custom-select">
                  <option selected>Delivery</option>
                  <option value="1">Success</option>
                  <option value="2">In Progress...</option>
                  <option value="3">Failure</option>
                </select>
               </td>
               </tr>
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
