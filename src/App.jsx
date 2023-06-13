import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </>
  )
}

export default App
