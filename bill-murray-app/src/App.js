import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import {Link, Router} from '@reach/router'
import Year from './components/Year'
import axios from 'axios'
import History from './components/History'





import './App.css';
import { DocumentProvider } from 'mongoose';

function App() {
  const [properties, setProperties] = useState({});
  const [properties2, setProperties2] = useState({});

  useEffect(() => {
    console.log("here")
    axios.get('http://localhost:2400/BillMurrayMovies')
    .then(res => {
      console.log(res)
      const movies = res.data;
      setProperties(movies)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  

  return (
    <div className="App">
            <Link style={{textDecoration:"none"}} to='/'>
            <Header/>
        </Link>
      <div className="container">
      <Year props={properties} path='/'/>
      <History />
      </div>      




      
        

        

    </div>
  );
}



export default App;
