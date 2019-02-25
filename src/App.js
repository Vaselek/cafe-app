import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import CollectOrder from "./containers/CollectOrder/CollectOrder";
import SendOrder from "./containers/SendOrder/SendOrder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path="/" exact component={CollectOrder} />
            <Route path="/send-order" component={SendOrder} />
        </Switch>
      </div>
    );
  }
}

export default App;
