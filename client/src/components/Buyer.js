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

class Buyer extends Component {
  state = {
  };

  expandRow(el) {
    console.log(el.currentTarget, el.currentTarget.classList);
    if (el.currentTarget.classList.contains('collapsed')) {
      //reveal
      el.currentTarget.nextSibling.classList.remove('hidden-details');
      el.currentTarget.classList.remove('collapsed');
    } else {
      //hide
      el.currentTarget.classList.add('collapsed');
      el.currentTarget.nextSibling.classList.add('hidden-details');
    }
  };

  render() {
    return (
      <MDBContainer fluid>
        <MDBCardHeader className="mx-auto card-header float-none z-depth-1 w-75 p-3 py-2 px-2" tag="h4">Buyer</MDBCardHeader>
        <MDBCard className="mb-5 mx-auto float-none white z-depth-1 w-75 p-3">
          <div className="card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
              </div>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
              <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Address"/>
              <input type="email" id="defaultLoginFormEmail" class="w-50 form-control mb-4" placeholder="City"/>
              <div class="input-group mb-3 w-50">
              <select class="browser-default custom-select">
                <option selected>State</option>
                <option value="1">Virginia</option>
                <option value="2">New York</option>
                <option value="3">Pennsylvania</option>
                <option value="3">California</option>
                <option value="3">Texas</option>
                <option value="3">Alaska</option>
                <option value="3">Florida</option>
                <option value="3">Oregon</option>
                <option value="3">Nevada</option>
                <option value="3">Oklahoma</option>
              </select>
              </div>
              <div class="input-group mb-3">  
              <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Zip"/>
              </div>
            <MDBBtn className="px-2" block id="create-new-contract">
              Create New Contract
            </MDBBtn>
          </div>
        </MDBCard>
        <div class="card card-cascade narrower w-75 mx-auto float-none">

          <div
            class="view view-cascade card-header narrower d-flex justify-content-between align-items-center">

            <div>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-th-large mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-columns mt-0"></i>
              </button>
            </div>

            <a href="" class="white-text mx-3">Contracts</a>

            <div>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-pencil-alt mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="far fa-trash-alt mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-info-circle mt-0"></i>
              </button>
            </div>

          </div>

          <div class="px-4">

            <div class="table-wrapper table-responsive">
              <table class="table table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th class="th-lg">
                      <a>Name
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a href="">Amount
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a href="">Address
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-md">
                      <a href="">Status
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={(e) => this.expandRow(e)} class="collapsed">
                    
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>
                      <img class="status-step-icon" src={pending}></img>
                    </td>
                  </tr>
                  
                  <tr class="expanded-details hidden-details">
              <th></th>
              <td colspan="4">aw;oeifjawefoeifjawef
               oeifjawef oeifjawef oeifjawef oeifjawefoeifjawef oeifjawef oeifjawef oeifjawef oeifjawef
               </td>
               </tr>
                  
                  <tr onClick={(e) => this.expandRow(e)} class="collapsed">
                      <td>Jacob</td>
                      <td>@fat</td>
                      <td>Jacob</td>
                      <td><img class="status-step-icon" src={success}></img></td>
                  </tr>
              <tr class="expanded-details hidden-details">
              <th></th>
              <td colspan="4">aw;oeifjawefoeifjawef
               oeifjawef oeifjawef oeifjawef oeifjawefoeifjawef oeifjawef oeifjawef oeifjawef oeifjawef
               </td>
               </tr>
                  <tr onClick={(e) => this.expandRow(e)} class="collapsed">
                    
                    <td>Larry</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td><img class="status-step-icon" src={failed}></img></td>
                  </tr>
                  <tr class="expanded-details hidden-details">
              <th></th>
              <td colspan="4">aw;oeifjawefoeifjawef
               oeifjawef oeifjawef oeifjawef oeifjawefoeifjawef oeifjawef oeifjawef oeifjawef oeifjawef
               </td>
               </tr>
                  <tr onClick={(e) => this.expandRow(e)} class="collapsed">
                    <td>Paul</td>
                    <td>@P_Topolski</td>
                    <td>Paul</td>
                    <td><img class="status-step-icon" src={pending}></img></td>
                  </tr>
                  <tr class="expanded-details hidden-details">
              <th></th>
              <td colspan="4">aw;oeifjawefoeifjawef
               oeifjawef oeifjawef oeifjawef oeifjawefoeifjawef oeifjawef oeifjawef oeifjawef oeifjawef
               </td>
               </tr>
                  <tr onClick={(e) => this.expandRow(e)} class="collapsed">
                    <td>Larry</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td><img class="status-step-icon" src={success}></img></td>
                  </tr>
                  <tr class="expanded-details hidden-details">
              <th></th>
              <td colspan="4">aw;oeifjawefoeifjawef
               oeifjawef oeifjawef oeifjawef oeifjawefoeifjawef oeifjawef oeifjawef oeifjawef oeifjawef
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