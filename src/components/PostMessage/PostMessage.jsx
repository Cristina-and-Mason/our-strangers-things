import { React, useState, useEffect } from "react";

function PostMessage(props) {
    const [ newMessage, setNewMessage ] = useState('')
    const TOKEN_STRING = localStorage.getItem("token");
    async function fetchMessages() {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${props.id}/messages`, {
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

    return (
        <div>
            <h1>hello world</h1>
        </div>
    )
}

export default PostMessage