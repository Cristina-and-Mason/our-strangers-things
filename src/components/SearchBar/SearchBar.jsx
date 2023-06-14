import {useState} from 'react'
function SearchBar (props){
    // console.log(props)

    let [searchQuery, setSearchQuery]=useState("");

    let filteredPosts=allPosts.filter((singlePost)=> {
        if (singlePost.title.includes (searchQuery)) {

            return singlePost
        }
    })

    return(
        <div>
            <h2>Single Post:</h2>
                <form>
                    <label htmlFor="search-query">Search by Post Name Here:</label>
                    <input 
                    name="search-query"
                    type="text"
                    value={searchQuery}
                    onChange={(event) => {
                        setSearchQuery(event.target.value)
                    }}
                    
                    ></input>
                </form>

                {
                    filteredPosts.length ? filteredPosts.map((singlePost, idx) =>{
                        return(
                            <div key={idx}>
                                <h2>Post Titles: {singlePost.title}</h2>
                                <p>Description: {singlePost.description}</p>
                            </div>
                        )
                    }) : <p>Loading...</p>
                }
        </div>
    )
}

export default SearchBar;