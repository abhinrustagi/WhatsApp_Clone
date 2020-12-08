import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Box from "./Box";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <Box>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
