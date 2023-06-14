import { useState, useEffect } from "react";
function PostsList (props){
    // Step S: Setup
  const [allPosts, setAllPosts] =useState ([]);

  // Step F: Fetch our data
  useEffect (() =>{
    async function fetchOurPosts(){
      try {
          const response= await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts")

          const translatedData= await response.json();

          setAllPosts(translatedData.data.posts);

          console.log(translatedData.data.posts);
      }catch (error){
        console.log(error);
      }
    }
    fetchOurPosts();
  }, [])
    return(
        <div>
            <h2>All Posts below:</h2>
            <h2>{allPosts.title}</h2>
            <h2>{allPosts.description}</h2>
        </div>
    )
}

export default PostsList;