import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Hello My friend checkout</h1>
          </Route>
          <Router path="/login">
            <h1>Hello my friend Login</h1>
          </Router>
          <Route path="/">
            <h1>Hello my friend HOMEPAGE</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
