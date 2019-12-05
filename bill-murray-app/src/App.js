import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import {Link, Router} from '@reach/router'
import Home from './components/Home'
import Details from './components/Details'

import './App.css';


function App() {
  return (
    <div className="App">
            <Link style={{textDecoration:"none"}} to='/'>
            <Header/>
        </Link>
      <Router>
        <Home path='/'/>
        <Details path='/details/:id' />
      </Router>
      

      </div> 
  );
}



export default App;
