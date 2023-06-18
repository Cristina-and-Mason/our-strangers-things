import React, {useState} from "react";
import {loginUser} from "../../api-adapters";
import {useNavigate} from "react-router-dom";


function Delete (props){
    const loggedInUserName = localStorage.getItem("username") 
    const loggedInPassword= localStorage.getItem ("password")
    const navigate= useNavigate ();
    async function sendDeleteRequest(event){
        event.preventDefault ();
        try{
            const TOKEN_STRING= localStorage.getItem ("token");
            const response= await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${props.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN_STRING}`
                }
            })

            const translatedData= await response.json();

            navigate('/posts')
            
            
            const filteredPosts= props.allPosts.filter((indivPost) => {
                if(indivPost.author.username !=event.target.value){
                    console.log(indivPost)
                    return indivPost
                }
            })

            props.setAllPosts(filteredPosts)
            return translatedData
        } catch (error){
            console.log(error);
        }
    }

    {
        filteredProfilePosts.length ? filteredProfilePosts.map((post, idx) => {
            return(
                <div key={idx}>
                     <h2>Name: {props.title}</h2>
                    <p>Post Id: {props.id}</p>
                        <button
                            onClick= {sendDeleteRequest}
                            value={props.id}
                        >
                            Delete Product #{props.id}
                        </button>
                </div>
            )
                }): <p>Loading...</p>

    }
}

export default Delete;