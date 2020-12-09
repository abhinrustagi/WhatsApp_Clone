import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Box from "./Box";
import Login from "./Login";
import Register from "./Register";
import ChatMenu from "./ChatMenu";

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
          <Route exact path="/chat-menu">
            <ChatMenu />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
