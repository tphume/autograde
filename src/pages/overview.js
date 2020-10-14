import React, { useState, useEffect, useContext } from "react";

import { fetchOverview } from "../repo/overview";
import { AuthContext } from "../contexts/auth";

function Overview({ current }) {
  const {
    state: { token },
  } = useContext(AuthContext);
  const [state, setState] = useState({});

  useEffect(() => {
    async function temp() {
      setState(await fetchOverview(token, current));
    }

    temp();
  }, [token, current]);

  if (current === "") {
    return <></>;
  }

  return (
    <>
      <h1>{JSON.stringify(state)}</h1>
    </>
  );
}

export default Overview;
