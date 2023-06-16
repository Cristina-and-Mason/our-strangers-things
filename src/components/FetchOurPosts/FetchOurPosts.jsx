import React, {useState, useEffect} from 'react'

function FetchOurPosts (props){
const [allPosts, setAllPosts] = useState([]);
useEffect (() =>{
    async function fetchOurPosts(){
      try {
          const response= await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts")

          const translatedData= await response.json();

          setAllPosts(translatedData.data.posts);

          // console.log(translatedData.data.posts);
      }catch (error){
        console.log(error);
      }
    }
    fetchOurPosts();
  }, [])
  const filteredThings = allPosts.filter((things) =>
  things.title.toLowerCase().includes(searchQuery.toLowerCase())
);
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
export default FetchOurPosts;