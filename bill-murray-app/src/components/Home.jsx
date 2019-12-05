import React, { useState, useReducer, useEffect } from "react";
import Year from "./Year";
import History from "./History";
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
    <div>
      <Year props={properties} />
      <History />
    </div>
  );
}

export default Home;