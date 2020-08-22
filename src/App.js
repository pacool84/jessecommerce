import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Hello My friend checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Hello my friend Login</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Hello my friend HOMEPAGE</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
