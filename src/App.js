import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Details">Details</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/Details/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
