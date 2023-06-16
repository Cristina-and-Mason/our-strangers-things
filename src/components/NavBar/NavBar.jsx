import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn)
  return (
    <div id='nav-bar'>
      {isLoggedIn ? (
        <>
          <Link to="/">Home </Link>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("token");
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