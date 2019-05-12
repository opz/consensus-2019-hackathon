import React, { Component } from "react";
import {
  MDBContainer,
  MDBCardHeader,
} from "mdbreact";
import { getDeliveredText } from '../utils/shared';
import failed from '../dist/images/failed.png'
import pending from '../dist/images/pending.png'
import success from '../dist/images/success.png'

class PrettyContractList extends Component {
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
    let index = 0;
    console.log(this.props.contracts);
    for (let key in this.props.contracts) {
      contractRows.push(
        <tbody>
          <tr onClick={(e) => this.expandRow(e)} className="collapsed">
            <td>{this.props.contracts[key]["name"]}</td>
            <td>{this.props.contracts[key]["amount"]}</td>
            <td>{this.props.contracts[key]["deposited"]}</td>
            <td>
              <img className="status-step-icon" src={pending}></img>
            </td>
          </tr>

          <tr className="expanded-details hidden-details">
            <th></th>
            <td colSpan="4">
              <button type="button" className="btn  blue-background-button" onClick={(e) => this.props.handleWithdraw(this.props.contracts[key]["object"])}>Withdraw</button>
              <button type="button" className="btn  blue-background-button" onClick={(e) => this.props.handleSendMoney(e, this.props.contracts[key]["object"])}>Send</button>
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" disabled={true} id="customSwitches" />
                <label className="custom-control-label" for="customSwitches">Shipped</label>
              </div>
              <select class="browser-default custom-select" onChange={(e) => this.props.handleDeliveryChange(e, this.props.contracts[key]["object"])}>
                <option selected>Delivery</option>
                <option value="1">Success</option>
                <option value="2">In Progress...</option>
                <option value="3">Failure</option>
              </select>
            </td>
          </tr>
        </tbody>
      );

    };
    return (
      <MDBContainer fluid>
        <MDBCardHeader className="mx-auto card-header float-none z-depth-1 w-75 p-3 py-2 px-2" tag="h4">Contracts on Escrow</MDBCardHeader>
        <div className="card card-cascade narrower w-75 mx-auto float-none">
          <div className="px-4">
            <div className="table-wrapper table-responsive">
              <table className="table table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th className="th-lg">
                      <a> Name
                      <span className="sort-column-icon"> ⇅</span>
                      </a>
                    </th>
                    <th className="th-lg">
                      <a href=""> Amount
                      <span className="sort-column-icon"> ⇅</span>
                      </a>
                    </th>
                    <th className="th-lg">
                      <a href=""> Deposited
                      <span className="sort-column-icon"> ⇅</span>
                      </a>
                    </th>
                    <th className="th-md">
                      <a href="">Status
                      <span className="sort-column-icon"> ⇅</span>  
                      </a>
                    </th>
                  </tr>
                </thead>

                {contractRows}

              </table>
            </div>

          </div>

        </div>
      </MDBContainer>
    );
  }
};

export default PrettyContractList;
