import {useEffect, useState} from 'react'

const Profile = ({ authenticatedUserId }) => {

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts");
      const data = await response.json();
      props.setAllPosts(translatedData.data.posts);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredPosts = posts.filter(post => post.userId === authenticatedUserId);
    setFilteredPosts(filteredPosts);
  }, [posts, authenticatedUserId]);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={props.id}>{props.title}</div>
      ))}
    </div>
  );
};

export default Profile