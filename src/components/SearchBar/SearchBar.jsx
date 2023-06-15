import {useState} from 'react'
function SearchBar ({allPosts, setAllPosts}){
    // console.log(props)
let [searchQuery, setSearchQuery]=useState("");

    let filteredPosts=allPosts.filter((post) => {
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
                        return(
                            <div key={idx}>
                                <h2>Post Title: {post.title}</h2>
                                <p>Description: {post.description}</p>
                            </div>
                        )
                    }) : <p>Loading...</p>
                }
        </div>
    )
}

export default SearchBar;