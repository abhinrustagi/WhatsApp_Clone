import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Box from "./components/Box";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatMenu from "./components/ChatMenu";

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
