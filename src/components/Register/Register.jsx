import React, {useState} from 'react';
import {registerUser} from "../../api-adapters"
import {useNavigate} from "react-router-dom"

const Register= (props) => {
    const setIsLoggedIn= props.setIsLoggedIn
    const [username, setUsername] =useState("")
    const [password, setPassword] = useState("");
    const navigate= useNavigate()

    const handleSubmit= async (event)=>{
        event.preventDefault ()

        try{
            const result =await registerUser(username, password)
            console.log(result)

            localStorage.setItem('token', result.token)
            setIsLoggedIn (true)

            navigate('/posts')
        } catch (error){
            console.log (error)
        }
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
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
    </div>
            
    )
}

export default Register;