import { useState, useEffect } from "react";
import SinglePost from "../SinglePost/SinglePost";

function PostsList (props) {
    return(
        <div>
            <h2>All Posts below:</h2>
           {
           props.allPosts.length ? props.allPosts.map((post) => {
                return <SinglePost key={post._id} allPosts={post.allPosts} setAllPosts={post.setAllPosts} />
            }) : (
                <h3>Loading</h3>
            )
        } 
        </div>
    )
}

export default PostsList;