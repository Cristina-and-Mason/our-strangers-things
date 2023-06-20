import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = (props) => {
  return (
    <div id='nav-bar'>
      {props.isLoggedIn ? (
        <>
          <Link to="/">HOME </Link>
          <Link to="/posts">POSTS</Link>
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
          <Link to="/">HOME </Link>
          <Link to="/register">REGISTER </Link>
          <Link to="/login">LOGIN </Link>
          <Link to="/posts">POSTS</Link>
        </>
      )}
    </div>
  );
};

export default NavBar;