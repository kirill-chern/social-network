import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/profile">Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/dialogs">Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/news">News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/music">Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
