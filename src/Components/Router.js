import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "../Routes/Main";

export default () => (
  <Router>
    <Route exact path="/main" component={Main} />
  </Router>
);
