import {useState} from 'react'
import {Link} from 'react-router-dom';

function Profile ({allPosts, setAllPosts}) {
    let [searchQuery, setSearchQuery]=useState("");

    let filteredProfilePosts= allPosts.filter((post) =>{
        let lowercasedName= post.title.toLowerCase ();
        let lowercasedQuery= searchQuery.tolowerCase ();

        if (lowercasedName.includes (lowercasedQuery)){
            return post
        }

    })

    {
        filteredProfilePosts.length ? filteredProfilePosts.map((post, idx) => {
            return (
                <div key= {idx}>
                    <h2>Post Title: {post.title}</h2>
                    <p>Description: {post.description}</p>
                </div>
            )
        }): <p>Loading...</p>
    }

    
}

export default Profile