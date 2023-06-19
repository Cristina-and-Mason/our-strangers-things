import { useState, useEffect } from "react";

function Edit() {
    const TOKEN_STRING = localStorage.getItem("token");
    const [newTitle, setNewTitle] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newWillDeliver, setNewWillDeliver] = useState(false)
    useEffect(()=>{
        const updatePost = async (event) => {
            event.preventDefault()
            try {
              const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
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
              return result
            } catch (err) {
              console.error(err);
            }
          }
    })
}