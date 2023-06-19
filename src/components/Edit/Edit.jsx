import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
    const TOKEN_STRING = localStorage.getItem("token");
    const { id } = useParams();
    const BASE_URL = `https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${id}`
    const navigate = useNavigate()
    const [newTitle, setNewTitle] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newWillDeliver, setNewWillDeliver] = useState(false)
    const updatePost = async (event) => {
            event.preventDefault()
            try {
              const response = await fetch(`${BASE_URL}`, {
                method: "PATCH",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${TOKEN_STRING}`
                },
                body: JSON.stringify({
                  post: {
                    title: newTitle,
                    description: newDesc,
                    price: newPrice,
                    location: newLocation,
                    willDeliver: newWillDeliver
                  }
                })
              });
              const result = await response.json();
              console.log(result);
            navigate('/users/me')
              return result
            } catch (err) {
              console.error(err);
            }
          }

    return (
        <form onSubmit={updatePost}>
            <h1>Edit Post:</h1>
            <label>New Post Title:</label>
            <input 
            title="title" 
            type="text" 
            placeholder="Your title goes here"
            value={newTitle}
            onChange={(event) => {
                setNewTitle(event.target.value)
            }}
            ></input><br/>
            <label>New Post Description:</label>
            <input 
            name="description" 
            type="text" 
            placeholder="Your description goes here"
            value={newDesc}
            onChange={(event) => {
                setNewDesc(event.target.value)
            }}
            ></input><br/>
            <label>New Post Price:</label>
            <input 
            name="price" 
            type="text" 
            placeholder="Your price goes here"
            value={newPrice}
            onChange={(event) => {
                setNewPrice(event.target.value)
                
            }}
            ></input><br/>
            <label>New Post Location:</label>
            <input 
            name="price" 
            type="text" 
            placeholder="Your price goes here"
            value={newLocation}
            onChange={(event) => {
                setNewLocation(event.target.value)
                
            }}
            ></input><br/>
            <label>New Will Deiver Status:</label>
            <input 
            name="price" 
            type="text" 
            placeholder="t rue or flase"
            value={newWillDeliver}
            onChange={(event) => {
                setNewWillDeliver(event.target.value)
                
            }}
            ></input><br/>
            <button type="submit">Submit Changes</button>
        </form>
    )
}

export default Edit