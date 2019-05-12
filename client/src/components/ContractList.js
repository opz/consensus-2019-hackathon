import React, { Component } from "react";
import {
  Card,
  CardBody,
  Table,
  TableBody,
  TableHead,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { getDeliveredText } from '../utils/shared';

class ContractList extends Component {
  render() {
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
      {
        label: "Amount",
        field: "heading1",
        sort: "asc"
      },
      {
        label: "Deposited",
        field: "heading2",
        sort: "asc"
      },
      {
        label: "Delivered",
        field: "heading3",
        sort: "asc"
      },
      {
        label: "Shipped",
        field: "heading4",
        sort: "asc"
      },
      {
        label: "Funds",
        field: "heading5",
        sort: "asc"
      },
    ];
    let contractRows = [];
    let index = 0;
    for (let key in this.props.contracts) {
      contractRows.push(
        {
          id: index += 1,
          heading0: this.props.contracts[key]["name"],
          heading1: this.props.contracts[key]["amount"],
          heading2: this.props.contracts[key]["deposited"],
          heading3: getDeliveredText(parseInt(this.props.contracts[key]["delivered"])),
          heading4:
          <select className="browser-default custom-select" defaultValue={this.props.contracts[key]["shipped"]} onChange={(e) => this.props.handleShippedChange(e, this.props.contracts[key]["object"])}>
            <option value="false" >False</option>
            <option value="true" >True</option>
          </select>,
          heading5:
          <MDBBtn color="primary" size="sm" onClick={(e) => this.props.handleWithdrawFunds(e, this.props.contracts[key]["object"])}>Withdraw Funds</MDBBtn>,
        })
    };
    return (
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
    );
  }
};

export default ContractList;
