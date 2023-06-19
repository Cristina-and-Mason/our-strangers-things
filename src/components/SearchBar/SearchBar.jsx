import {useState} from 'react'
import SinglePost from '../SinglePost/SinglePost';
function SearchBar ({allPosts}){
let [searchQuery, setSearchQuery]=useState("");

    let filteredPosts = allPosts.filter((post) => {
        let lowercasedName= post.title.toLowerCase();
        let lowercasedQuery= searchQuery.toLowerCase();
        if (lowercasedName.includes (lowercasedQuery)) {
            return post
        }
    })

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
                    filteredPosts.length ? filteredPosts.map((post, idx) =>{
                        return <SinglePost key={idx} id={post._id} title={post.title} description={post.description} price={post.price} author={post.author} messages={post.messages} willDeliver={post.willDeliver}/>
                    }) : <p>Loading...</p>
                }
        </div>
    )
}

export default SearchBar;