import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MyPost from '../MyPost/MyPost';

const Profile = () => {
  const [ myPosts, setMyPosts ] = useState([])
  const [ myMessages, setMyMessages ] = useState([])
  const TOKEN_STRING = localStorage.getItem("token");
  const navigate = useNavigate()
  useEffect (() => {
    async function profileData() {
      try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN_STRING}`
          },
        });
        const result = await response.json();
        console.log(result.data.messages);
        setMyPosts(result.data.posts)
        setMyMessages(result.data.messages)
      } catch (error) {
        console.log(error)
      }
    }
    profileData()
  }, [])

  return (
    <div>
        
           
      <h1>My Posts</h1>
      {
        myPosts.map((post) => {
          return <MyPost key={post._id} title={post.title} id={post._id} description={post.description} author={post.author} price={post.price} />
                  
          })
      }
      <h1>My Messages</h1>
      {
        myMessages.map((message) => {
          return  <>
                    <h2 key={message._id}>{message.fromUser.username} says {message.content} to {message.post.author.username} </h2>
                  </>
        })
      }
            
           
    </div>
  );
};

export default Profile