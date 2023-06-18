import {useEffect, useState} from 'react'

const Profile = ({ authenticatedUserId }) => {
  const TOKEN_STRING = localStorage.getItem("token");
  async function profileData() {
    try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.log(error)
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts");
  //     const data = await response.json();
  //     props.setAllPosts(translatedData.data.posts);
  //   };

  //   fetchPosts();
  // }, []);

  // useEffect(() => {
  //   const filteredPosts = posts.filter(post => post.userId === authenticatedUserId);
  //   setFilteredPosts(filteredPosts);
  // }, [posts, authenticatedUserId]);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={props.id}>{props.title}</div>
      ))}
    </div>
  );
};

export default Profile