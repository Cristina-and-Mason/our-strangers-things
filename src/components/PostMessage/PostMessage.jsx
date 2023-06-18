import { React, useState, useEffect } from "react";

function PostMessage(props) {
    const [ newMessage, setNewMessage ] = useState('')
    const TOKEN_STRING = localStorage.getItem("token");
    async function postMessages() {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${id}/messages`, {
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
        const translatedData = await response.json();
        console.log(translatedData)
        return translatedData    
        } catch (error) {
            console.log(error)
        }
    }
console.log()
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