import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { PostsList, Home, SinglePost } from './components/index';
import './App.css'

function App() {
  // Step S: Setup
  const [allPosts, setAllPosts] =useState ([]);

  // Step F: Fetch our data
  useEffect (() =>{
    async function fetchOurPosts(){
      try {
          const resonse= await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts`")

          const translatedData= await response.json();

          setAllPosts (translatedData.posts);

          console.log(translatedData.posts);
      }catch (error){
        console.log(error);
      }
    }
    fetchOurPosts ();
  }, [])

  return (
    <>
        <h2>Hello!</h2>
      <PostsList allPosts={allPosts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
    </>
  )
}

export default App
