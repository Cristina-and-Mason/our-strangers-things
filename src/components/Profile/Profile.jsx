import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import MyPost from '../MyPost/MyPost';
import MyMessage from '../MyMessage/MyMessage';

const Profile = (props) => {
  const [ myPosts, setMyPosts ] = useState([])
  const [ myMessages, setMyMessages ] = useState([])
  const TOKEN_STRING = localStorage.getItem("token");
  const navigate = useNavigate()
  const activePosts = myPosts.filter((post) => {
    if(post.active == true) {
      return post
    }
  })

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
        activePosts.map((post) => {
          return <MyPost key={post._id} title={post.title} id={post._id} description={post.description} price={post.price} allPosts={props.allPosts} setAllPosts={props.setAllPosts} />
               
          })
      }
      <h1>My Messages</h1>
      {
        myMessages.map((message) => {
          return  <MyMessage key={message._id} fromUser={message.fromUser} content={message.content} post={message.post} />       
        })
      }
            
           
    </div>
  );
};

export default Profile