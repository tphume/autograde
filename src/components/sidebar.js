import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./sidebar.module.css";

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
  const location = useLocation();

  return (
    <li
      className={`${styles.navItem} ${
        location.pathname.startsWith(route) ? styles.navItemActive : ""
      }`}
    >
      <NavLink
        to={route}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default SideBar;
