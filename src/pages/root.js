import React, { useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AuthContext } from "../contexts/auth";
import Info from "../components/info";
import Login from "../components/login";
import SideBar from "../components/sidebar";
import Wrapper from "../components/wrapper";
import Overview from "./overview";
import Grades from "./grades";
import Labs from "./labs";

import styles from "./root.module.css";

function App() {
  const [current, setCurrent] = useState("");

  const auth = useContext(AuthContext);
  if (!auth.state.isAuth) {
    return (
      <main className={styles.landingContainer}>
        <Info />
        <Login dispatch={auth.dispatch}></Login>
      </main>
    );
  }

  return (
    <div className={styles.container}>
      <SideBar dispatch={auth.dispatch} username={auth.state.username} />
      <Wrapper current={current} setCurrent={setCurrent}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/overview" />
          </Route>
          <Route exact path="/overview">
            <Overview current={current} />
          </Route>
          <Route exact path="/grades">
            <Grades current={current} />
          </Route>
          <Route exact path="/labs">
            <Labs current={current} />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;
