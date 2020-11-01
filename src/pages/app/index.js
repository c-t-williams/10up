import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../../components/layout/header";
import Home from "../home";
import Page from "../page";
import Login from "../login";

import "./layout.css";

const App = () => (
  <div>
    <Header />

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/pages/:slug" component={Page} />
      </Switch>
    </main>
  </div>
);

export default App;
