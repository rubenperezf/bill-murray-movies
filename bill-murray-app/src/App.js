import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import axios from 'axios'
import {Link, Router} from '@reach/router'
import Year from './components/Year'


import './App.css';

function App() {
  const [properties, setProperties] = useState({});

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
        <Header path="/"/>
        <Year props={properties}/>
       
        

    </div>
  );
}

export default App;
