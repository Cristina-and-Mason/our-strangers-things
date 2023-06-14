import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { PostsList, Home, SinglePost, SearchBar, Delete, NewPost } from './components/index';
import './App.css'

function App() {
  const [allPosts, setAllPosts] =useState ([]);
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
