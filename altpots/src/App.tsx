import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Orders from "./components/Orders";
import Suppliers from "./components/Suppliers";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/suppliers">
          <Suppliers />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
