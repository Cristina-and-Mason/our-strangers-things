import {registerUser} from "../../api-adapters"
import {useNavigate} from "react-router-dom"

const Register= (props) => {
    const setIsLoggedIn= props.setIsLoggedIn
    const username = props.username;
    const setUsername = props.setUsername;
    const password = props.password;
    const setPassword = props.setPassword;
    const navigate= useNavigate()

    const handleSubmit= async (event)=>{
        event.preventDefault ()

        try{
            const result =await registerUser(username, password)
            console.log(result)

            localStorage.setItem('token', result.token)
            setIsLoggedIn (true)

            navigate('/')
        } catch (error){
            console.log (error)
        }
    }
    return (
        <div id="register-container">
            <div id="register-title">
            <h2>Register</h2>
            </div>
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