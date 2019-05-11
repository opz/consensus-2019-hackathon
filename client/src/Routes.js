import React from "react";
import { Route, Switch } from "react-router-dom";
import Seller from "./components/Seller";
import App from "./App";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/seller" component={Seller} />
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
