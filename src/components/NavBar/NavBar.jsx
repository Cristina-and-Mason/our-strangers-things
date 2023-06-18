import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = (props) => {
  // console.log(props.isLoggedIn)
  return (
    <div id='nav-bar'>
      {props.isLoggedIn ? (
        <>
          <Link to="/">Home </Link>
          <Link to="/posts">POSTS</Link>
          <Link to="/searchbar">SEARCH</Link>
          <Link to="/users/me">PROFILE</Link>
          <button
            onClick={() => {
              props.setIsLoggedIn(false);
              localStorage.removeItem("token");
              localStorage.removeItem("username");
              localStorage.removeItem("password");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/">Home </Link>
          <Link to="/register">Register </Link>
          <Link to="/login">Login </Link>
          <Link to="/posts">POSTS</Link>
          <Link to="/searchbar">SEARCH</Link>
        </>
      )}
    </div>
  );
};

export default NavBar;