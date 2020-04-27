import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
