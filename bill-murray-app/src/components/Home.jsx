import React, { useState, useReducer, useEffect } from "react";
import Year from "./Year";
import History from "./History";
import Movies from "./Movies";
import axios from 'axios'



function Home() {
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
    <div className="container">
      <Year props={properties} />
      <History />
      <Movies />
    </div>
  );
}

export default Home;