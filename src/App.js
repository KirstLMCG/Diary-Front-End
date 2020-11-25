import './App.css';
import React from 'react'
import { Router } from "@reach/router"
import Blog from './components/Blog.jsx'
import Food from './components/Food.jsx'
import Flare from './components/Flare.jsx'
import SingleBlog from './components/SingleBlog.jsx'

function App() {
  return (
    <div>
      <Router>
        <Blog path='/' />
        <Blog path='/blog' />
        <SingleBlog path='/blog/:id' />
        <Food path='/foodtracking' />
        <Flare path='/flaretracking' />
      </Router>
    </div>
  );
}

export default App;
