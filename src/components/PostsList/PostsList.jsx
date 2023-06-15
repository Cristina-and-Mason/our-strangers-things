import { useState, useEffect } from "react";
import SinglePost from "../SinglePost/SinglePost";
import NewPost from "../NewPost/NewPost";

function PostsList (props) {
    // console.log(props)
    return(
        <div>
            <h2>All Posts below:</h2>
            {
                <NewPost newPost={props.newPost} setNewPost={props.setNewPost} />
        }
            {
           props.allPosts.length ? props.allPosts.map((post) => {
                return <SinglePost key={post._id} id={post._id} title={post.title} description={post.description}/>
            }) : (
                <h3>Loading</h3>
            )
        } 
        </div>
    )
}

export default PostsList;