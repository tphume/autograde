import React from "react";
import { NavLink } from "react-router-dom";

function SideBar({ dispatch }) {
  return (
    <nav>
      <ul>
        <NavItem route="/overview" name="Overview" />
        <NavItem route="/grades" name="Grades" />
        <NavItem route="/labs" name="Labs" />
      </ul>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
    </nav>
  );
}

function NavItem({ route, name }) {
  return (
    <li>
      <NavLink to={route}>{name}</NavLink>
    </li>
  );
}

export default SideBar;
