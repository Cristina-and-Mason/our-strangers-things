import React, { useState } from "react";
import { loginUser } from "../../api-adapters";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const toRegister = () => {
      navigate("/register");
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const result = await loginUser(username, password);
        console.log(result);
  
        localStorage.setItem("token", result.token);
        setIsLoggedIn(true);
  
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    return(
        <div>
          <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
            <h3>No Account? Create one!</h3>
        <button id="loginbutton" onClick={toRegister}>
        Create A New Account
      </button>
      </div>
    )
}
export default Login;