import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { PostsList, Home, SinglePost, SearchBar, Delete, NewPost, Register, NavBar, Login, PostMessage, MessageThread, PostDetails, Profile, Edit } from './components/index';
import './App.css'

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostDesc, setNewPostDesc] = useState("");
  const [newPostPrice, setNewPostPrice] = useState("");
  const [isLoggedIn, setIsLoggedIn]= useState (false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  return (
    <>
     <div>
        <h2>Welcome to Strangers Things</h2>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList allPosts={allPosts} setAllPosts={setAllPosts} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/posts/:id" element={<Edit />} />
          <Route path="/posts/:id/messages" element={<PostMessage />} />
          <Route path="/searchbar" element={<SearchBar allPosts={allPosts}/>} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />} />
          <Route path="/new-post" element={<NewPost newPostTitle={newPostTitle} setNewPostTitle={setNewPostTitle} newPostDesc={newPostDesc} setNewPostDesc={setNewPostDesc} newPostPrice={newPostPrice} setNewPostPrice={setNewPostPrice} />} />
          <Route path="/users/me" element={<Profile allPosts={allPosts} setAllPosts={setAllPosts} />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </div>
    </>
  )
}

export default App
