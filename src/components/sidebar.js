import React from "react";
import { NavLink } from "react-router-dom";

// TODO: add icons to nav items
function SideBar({ dispatch }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/overview">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/grades">Grades</NavLink>
        </li>
        <li>
          <NavLink to="/overview">Labs</NavLink>
        </li>
        <li>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
