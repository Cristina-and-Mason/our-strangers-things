import React, {useState} from "react";
import {loginUser} from "../../api-adapters";
import {useNavigate} from "react-router-dom";


function Delete (props){
    const navigate= useNavigate ();
    async function sendDeleteRequest(event){
        event.preventDefault ();
        try{
            const TOKEN_STRING= localStorage.getItem ("token");
            const response= await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${event.target.value}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN_STRING}`
                }
            })

            const translatedData= await response.json();

            navigate('/posts')
            
            const filteredPosts= props.allPosts.filter((indivPost) => {
                if(indivPost._id !=event.target.value){
                    return indivPost
                }
            })

            props.setAllPosts(filteredPosts)
        } catch (error){
            console.log(error);
        }
    }

    return(
        <div>
            <h2>Name: {props.posts.title}</h2>
            <p>Post Id: {props.posts._id}</p>
            <button
                onClick= {sendDeleteRequest}
                value={props.product._id}
            >
                Delete Product #{props.posts._id}
            </button>
        </div>
    )
}

export default Delete;