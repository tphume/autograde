import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./sidebar.module.css";

function SideBar({ dispatch, username }) {
  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>AutoGrade</h1>
      <h6 className={styles.name}>{username}</h6>
      <ul>
        <NavItem route="/overview" name="Overview" />
        <NavItem route="/grades" name="Grades" />
        <NavItem route="/labs" name="Labs" />
      </ul>
      <button
        className={styles.logout}
        onClick={() => dispatch({ type: "LOGOUT" })}
      >
        LOGOUT
      </button>
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
