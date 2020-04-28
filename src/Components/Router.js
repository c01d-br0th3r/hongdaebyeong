import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "../Routes/Main";
import Header from "./Header";
import QnA from "../Routes/QnA";
import Settings from "../Routes/Settings";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/qna" component={QnA} />
      <Route exact path="/settings" component={Settings} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
