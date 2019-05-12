import React, { Component } from "react";
import withWeb3 from "../utils/withWeb3";
import {
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBContainer,
} from "mdbreact";
import failed from '../dist/images/failed.png'
import pending from '../dist/images/pending.png'
import success from '../dist/images/success.png'
import wei from '../dist/images/ethereum-logo.png'

class Buyer extends Component {
  state = {
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
                      <span className="sort-column-icon"> ⇅</span>
                      </a>
                    </th>
                    <th className="th-lg">
                      <a href="">Amount
                      <span className="sort-column-icon"> ⇅</span>
                      </a>
                    </th>
                    <th className="th-lg">
                      <a href="">Address
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
                <tbody>
                  <tr onClick={(e) => this.expandRow(e)} className="collapsed">
                    
                    <td>
                    Mark Roth
                    </td>
                    <td>
                    <div class="md-form">
                      <input value="5.22" type="text" id="inputPrefilledEx2" class="form-control"/>
                      <label for="inputPrefilledEx2"></label>
                    </div>
                    <img class="wei" src={wei}></img></td>
                    <td>
                    0x182hf038rf72hf982jd
                    </td>
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
                      <td>Jacob Grout</td>
                      <td>
                      <div class="md-form">
                      <input value="9.87" type="text" id="inputPrefilledEx2" class="form-control"/>
                      <label for="inputPrefilledEx2"></label>
                    </div>
                    <img class="wei" src={wei}></img>
                      </td>
                      <td>0x9238hr74gthf9283</td>
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
                    
                    <td>Larry Yellis</td>
                    <td>
                    <div class="md-form">
                      <input value="1.23" type="text" id="inputPrefilledEx2" class="form-control"/>
                      <label for="inputPrefilledEx2"></label>
                    </div>
                    <img class="wei" src={wei}></img>
                    </td>
                    <td>0x9283hf3874gg32</td>
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
                    <td>Paul Schomer</td>
                    <td>
                      
                    <div class="md-form">
                      <input value="6.14" type="text" id="inputPrefilledEx2" class="form-control"/>
                      <label for="inputPrefilledEx2"></label>
                    </div>
                    <img class="wei" src={wei}></img>
                    </td>
                    <td>0x9238fh8374g4</td>
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
                    <td>Larry Tilde</td>
                    <td>
                    <div class="md-form">
                      <input value="2.02" type="text" id="inputPrefilledEx2" class="form-control"/>
                      <label for="inputPrefilledEx2"></label>
                    </div>
                    <img class="wei" src={wei}></img></td>
                    <td>0x23r76t34t8749</td>
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



export default withWeb3(Buyer);