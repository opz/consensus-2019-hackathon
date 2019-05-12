import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Seller from "./components/Seller";
import Buyer from "./components/Buyer";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/seller" component={Seller} />
        <Route exact path="/buyer" component={Buyer} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
