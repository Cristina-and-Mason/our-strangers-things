import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { PostsList, Home, SinglePost, SearchBar, Delete, NewPost, Register, NavBar, FetchOurPosts, Login } from './components/index';
import './App.css'

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [isLoggedIn, setIsLoggedIn]= useState (false);

  // useEffect (() =>{
  //   async function fetchOurPosts(){
  //     try {
  //         const response= await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts")

  //         const translatedData= await response.json();

  //         setAllPosts(translatedData.data.posts);

  //         // console.log(translatedData.data.posts);
  //     }catch (error){
  //       console.log(error);
  //     }
  //   }
  //   fetchOurPosts();
  // }, [])

  useEffect(() => {
    const token = localStorage.getItem("token");
   
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  
   
  return (
    <>
     <div>
      {/* <nav className="container-element">
        <Link to="/">HOME</Link>
        <Link to="/posts">POSTS</Link>
        <Link to="/searchbar">SEARCH</Link>
      </nav> */}
        <h2>Welcome to Strangers Things</h2>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList allPosts={allPosts} newPost={newPost} setNewPost={setNewPost} />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/searchbar" element={<SearchBar allPosts={allPosts}/>}></Route>
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
