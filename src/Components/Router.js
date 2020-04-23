import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "../Routes/Main";
import Header from "./Header";
import QnA from "../Routes/QnA";
import Settings from "../Routes/Settings";

export default () => (
  <Router>
    <Header />
    <Route exact path="/main" component={Main} />
    <Route exact path="/qna" component={QnA} />
    <Route exact path="/settings" component={Settings} />
  </Router>
);
