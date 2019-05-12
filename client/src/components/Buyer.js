import React, { Component } from "react";
import withWeb3 from "../utils/withWeb3";
import {
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBContainer,
} from "mdbreact";

class Buyer extends Component {
  state = {
  };

  render() {
    return (
      <MDBContainer fluid>
        <MDBCardHeader className="mx-auto float-none z-depth-1 w-75 p-3 py-2 px-2" tag="h4">Buyer</MDBCardHeader>
        <MDBCard className="mb-5 mx-auto float-none white z-depth-1 w-75 p-3">
          <div className="card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
              </div>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
              <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Address"/>
              <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="City"/>
              <div class="input-group mb-3">
              <select class="browser-default custom-select">
                <option selected>State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              </div>
              <div class="input-group mb-3">  
              <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Zip"/>
              </div>
            <MDBBtn className="px-2" block color="danger">
              Create New Contract
            </MDBBtn>
          </div>
        </MDBCard>
        <MDBCard className="mx-auto float-none white z-depth-1 w-75 p-3">
        <div class="card card-cascade narrower">

          <div
            class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

            <div>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-th-large mt-0"></i>
              </button>
              <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                <i class="fas fa-columns mt-0"></i>
              </button>
            </div>

            <a href="" class="white-text mx-3">Table name</a>

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
              <table class="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>
                      <input class="form-check-input" type="checkbox" id="checkbox" />
                      <label class="form-check-label" for="checkbox" class="mr-2 label-table"></label>
                    </th>
                    <th class="th-lg">
                      <a>First Name
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a href="">Last Name
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a href="">Username
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a href="">Username
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a href="">Username
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                    <th class="th-lg">
                      <a href="">Username
                        <i class="fas fa-sort ml-1"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox1" />
                      <label class="form-check-label" for="checkbox1" class="label-table"></label>
                    </th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox2"/>
                      <label class="form-check-label" for="checkbox2" class="label-table"></label>
                    </th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox3"/>
                      <label class="form-check-label" for="checkbox3" class="label-table"></label>
                    </th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox4"/>
                      <label class="form-check-label" for="checkbox4" class="label-table"></label>
                    </th>
                    <td>Paul</td>
                    <td>Topolski</td>
                    <td>@P_Topolski</td>
                    <td>Paul</td>
                    <td>Topolski</td>
                    <td>@P_Topolski</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <input class="form-check-input" type="checkbox" id="checkbox5"/>
                      <label class="form-check-label" for="checkbox5" class="label-table"></label>
                    </th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
        </MDBCard>
      </MDBContainer>
    );
  }
}



export default withWeb3(Buyer);