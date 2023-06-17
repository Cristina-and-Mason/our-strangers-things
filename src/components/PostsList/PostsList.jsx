
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";
import NewPost from "../NewPost/NewPost";

function PostsList (props) {
    // console.log(props)
    // console.log(props.isLoggedIn)
    useEffect (() =>{
        async function fetchOurPosts(){
          try {
              const response= await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts")
    
              const translatedData= await response.json();
    
              props.setAllPosts(translatedData.data.posts);
          }catch (error){
            console.log(error);
          }
        }
        fetchOurPosts();
      }, [])
    return(
        <div>
            {
                props.isLoggedIn ? (
                    <>
                        <Link to='/new-post'>NEW POST</Link>
                        
                        {props.allPosts.length ? props.allPosts.map((post) => {
                                return <SinglePost key={post._id} id={post._id} title={post.title} description={post.description} price={post.price} author={post.author} messages={post.messages} willDeliver={post.willDeliver}/>
                            }) : (
                                <h3>Loading</h3>
                            )}
                    </>
                ) : (
                    <>
                        {props.allPosts.length ? props.allPosts.map((post) => {
                                return <SinglePost key={post} id={post._id} title={post.title} description={post.description} price={post.price} author={post.author} messages={post.messages} willDeliver={post.willDeliver}  />
                            }) : (
                                <h3>Loading</h3>
                            )}
                    </>
                )
            }
        </div>
    )
}

export default PostsList;