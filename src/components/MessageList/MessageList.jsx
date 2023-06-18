import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostMessage from "../PostMessage/PostMessage";
import MessageThread from "../MessageThread/MessageThread";


function MessageList(props) {
    const { id } = useParams();
    // console.log(id)
    const clickedOnPost = props.allPosts.filter((singlePost) => {
        if (singlePost._id == id) {
            // console.log(singlePost)
            return singlePost   
        }
    })[0]
    return (
        <>
            <h2>{clickedOnPost.title}</h2>
        </>
    )
}


export default MessageList