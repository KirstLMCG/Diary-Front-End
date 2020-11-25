import './App.css';
import React from 'react'
import { Router } from "@reach/router"
import Blog from './components/Blog.jsx'
import Food from './components/Food.jsx'
import Flare from './components/Flare.jsx'

function App() {
  return (
    <div>
      <Router>
        <Blog path='/' />
        <Blog path='/blog' />
        <Food path='/foodtracking' />
        <Flare path='/flaretracking' />
      </Router>
    </div>
  );
}

export default App;
