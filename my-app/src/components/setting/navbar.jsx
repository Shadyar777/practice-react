import React from "react";
import {NavLink} from "react-router-dom";
import navClass from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={navClass.nav}>
      <ol className='nav-list'>
        <li>
          <NavLink to='profile'>Profile</NavLink>
        </li>
        <li>
          <NavLink to='messages'>Messages</NavLink>
        </li>
        <li>
          <NavLink to='new'>News</NavLink>
        </li>
        <li>
          <NavLink to='User'>User</NavLink>
        </li>
        <li>
          <NavLink to='setting'>Setting</NavLink>
        </li>
      </ol>
    </div>
  );
};

export default Navbar;
