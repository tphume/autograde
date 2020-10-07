import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Overview from "./overview";
import Grades from "./grades";
import Labs from "./labs";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/overview" />
      </Route>
      <Route exact path="/overview">
        <Overview />
      </Route>
      <Route exact path="/grades">
        <Grades />
      </Route>
      <Route exact path="/labs">
        <Labs />
      </Route>
    </Switch>
  );
}

export default App;
