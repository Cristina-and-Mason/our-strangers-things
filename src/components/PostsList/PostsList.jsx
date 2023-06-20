import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

function PostsList (props) {
    const TOKEN_STRING = localStorage.getItem("token");
    let [searchQuery, setSearchQuery]=useState("");
    let filteredPosts = props.allPosts.filter((post) => {
        let lowercasedName= post.title.toLowerCase();
        let lowercasedQuery= searchQuery.toLowerCase();
        if (lowercasedName.includes(lowercasedQuery)) {
            return post
        }
    })
    useEffect (() => {
        async function fetchOurPosts(){
          try {
            const response= await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts", {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${TOKEN_STRING}`
                }
            })
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
                <form>
                 <label htmlFor="search-query">Search Posts:</label>
                    <input 
                    name="search-query"
                    type="text"
                    value={searchQuery}
                    onChange={(event) => {
                        console.log(event.target.value)
                        setSearchQuery(event.target.value)
                    }}
                    ></input>
                </form>
            {
                props.isLoggedIn ? (
                    <>
                        <Link to='/new-post'>NEW POST</Link>
                        
                        {
                        filteredPosts.length ? filteredPosts.map((post, idx) =>{
                            return <SinglePost key={idx} id={post._id} title={post.title} description={post.description} price={post.price} author={post.author} messages={post.messages} willDeliver={post.willDeliver} username={props.username} />
                        }) : <p>No results match your current search</p>
                        }
                    </>
                ) : (
                    <>
                        {
                        filteredPosts.length ? filteredPosts.map((post, idx) =>{
                            return <SinglePost key={idx} id={post._id} title={post.title} description={post.description} price={post.price} author={post.author} messages={post.messages} willDeliver={post.willDeliver}/>
                        }) : <p>No results match your current search</p>
                        }
                    </>
                )
            }
        </div>
    )
}

export default PostsList;