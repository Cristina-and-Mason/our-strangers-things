import { useParams, useNavigate } from "react-router-dom";
function Delete () {
    const TOKEN_STRING = localStorage.getItem ("token");
    const { id } = useParams()
    console.log(id)
    const BASE_URL = `https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${id}`
    const navigate = useNavigate()
        async function sendDeleteRequest (event) {
            event.preventDefault ();
            try{
                const response= await fetch(`${BASE_URL}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${TOKEN_STRING}`
                    }
                })
                const translatedData= await response.json();
                navigate("/users/me")
                return translatedData
                } catch (error){
                console.log(error);
            }
        }
        return (
        <div>
            <h2>Are you sure you want to delete?</h2>
        <button onClick={sendDeleteRequest}>Delete</button>
        </div>
        )
}

export default Delete