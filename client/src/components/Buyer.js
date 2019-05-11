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
        <MDBCard className="mx-auto float-none white z-depth-1">
          <MDBCardHeader className="py-2 px-2" color="primary-color" tag="h4"> Account Management</MDBCardHeader>
          <div className="card-body">
            <MDBBtn className="px-2" block color="danger">
              Buyer Be happy!
            </MDBBtn>
          </div>
        </MDBCard>
      </MDBContainer>
    );
  }
}



export default withWeb3(Buyer);