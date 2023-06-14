import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { PostsList, Home, SinglePost, SearchBar, Delete, NewPost } from './components/index';
import './App.css'

function App() {
  const [allPosts, setAllPosts] =useState ([]);

  useEffect (() =>{
    async function fetchOurPosts(){
      try {
          const response= await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts")

          const translatedData= await response.json();

          setAllPosts(translatedData.data.posts);

          console.log(translatedData.data.posts);
      }catch (error){
        console.log(error);
      }
    }
    fetchOurPosts();
  }, [])
  return (
    <>
        <h2>Hello!</h2>
        <PostsList allPosts={allPosts} setAllPosts={setAllPosts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
    </>
  )
}

export default App
