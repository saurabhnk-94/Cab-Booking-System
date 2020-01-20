import React from "react";
import { Route } from "react-router-dom";
import User from "./user";
import Home from "./home";
import Driver from "./driver";

class BasicRouter extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/driver" component={Driver} />
      </div>
    );
  }
}

export default BasicRouter;
