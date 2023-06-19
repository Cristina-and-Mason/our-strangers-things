import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostMessage(props) {
    const [ newMessage, setNewMessage ] = useState('')
    const { id } = useParams();
    console.log(id)
    const BASE_URL = `https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${id}/messages`
    const TOKEN_STRING = localStorage.getItem("token");
    const postMessages = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING}`
            },
            body: JSON.stringify({
              message: {
                content: newMessage
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
    return (
        <form onSubmit={postMessages}>
            <label>Send a Message:</label>
            <textarea 
            name="chat" 
            type="text" 
            placeholder="Send a message"
            value={newMessage}
            onChange={(event) => {
                setNewMessage(event.target.value)
            }}
            />
            <button type="submit">Send</button>
        </form>
    )
}

export default PostMessage