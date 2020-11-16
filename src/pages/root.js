import React, { useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AuthContext } from "../contexts/auth";
import Slider from "../components/slider";
import Login from "../components/login";
import SideBar from "../components/sidebar";
import Wrapper from "../components/wrapper";
import Overview from "./overview";
import Grades from "./grades";
import Labs from "./labs";

import styles from "./root.module.css";
import Slide01 from "../images/landing/slide-01.jpg";
import Slide02 from "../images/landing/slide-02.jpg";
import Slide03 from "../images/landing/slide-03.jpg";
import Slide04 from "../images/landing/slide-04.jpg";

const landingImages = [Slide01, Slide02, Slide03, Slide04];

function App() {
  const [current, setCurrent] = useState({ id: "" });

  const auth = useContext(AuthContext);
  if (!auth.state.isAuth) {
    return (
      <main className={styles.landingContainer}>
        <Slider slides={landingImages} />
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
