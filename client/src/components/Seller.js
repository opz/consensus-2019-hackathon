import React, { Component } from "react";
import withWeb3 from "../utils/withWeb3";
import {
  Card,
  CardBody,
  Col,
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBEdgeHeader,
  MDBFreeBird,
  MDBIcon,
  MDBContainer,
  Row,
  Table,
  TableBody,
  TableHead,
} from "mdbreact";

class Seller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: {},
    };
  }

  render() {
    let contractRows = [];
    let index = 0;
    for (let key in this.state.contracts) {
      contractRows.push(
        {
          id: index += 1,
          heading0: key,
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
        <MDBEdgeHeader color="indigo darken-3" />
        <MDBFreeBird>
        </MDBFreeBird>

        <div className="text-center mt-3">
          <MDBBtn
            color="primary"
            type="submit">
            Create Contract
            </MDBBtn>
        </div>

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

      </MDBContainer>
    );
  }
}

export default withWeb3(Seller);
