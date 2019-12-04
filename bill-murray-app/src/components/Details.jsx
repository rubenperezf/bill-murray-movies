import React, { useEffect, useState } from "react";
import axios from "axios";

const Details = props => {
  const [properties, setProperties] = useState({});

  useEffect(() => {
    console.log("here");
    axios
      .get("http://localhost:2400/BillMurrayMovies")
      .then(res => {
        console.log(res);
        const movies = res.data;
        setProperties(movies);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  let string = (JSON.stringify(properties))
  return (
    <div className='details'>
      <h1>Im details!</h1>
      <h2>The Movie ID is: {props.id} </h2>
      
      <h3>{string.substring(9,33)}</h3>
      <h3>{string}</h3>

    </div>
  );
};

export default Details;
