import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";


export const dataReducer = (state, action) => {
  if (action.type === "SET_ERROR") {
    return { ...state, list: [], error: true };
  }
  if (action.type === "SET_LIST") {
    return { ...state, list: action.list, error: null };
  }
  throw new Error();
};
const initialData = {
  list: [],
  error: null
};
function Movies(props) {
  const [data, dispatch] = useReducer(dataReducer, initialData);
  useEffect(() => {
    axios
      .get("http://localhost:2400/BillMurrayMovies")
      .then(response => {
        console.log(response);
        dispatch({ type: "SET_LIST", list: response.data });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  return (
    <div className="squares">
        <p>Pick a movie</p>
      <h2>          {data.list
          .filter(element=> element._id===props.id)
          .map(movies => {
              return (
                  <p key={movies._id}>
                      <p>Title: {movies.title}</p>
                  </p>
              )
          })}</h2>
      {data.error && <div className="error">Error</div>}
      <div>
          {data.list
          .map(movies => {
              return (

                 <a key={movies._id} href={`http://localhost:3000/details/${movies._id}`}>{movies.title}<br></br></a>
                 
              )
          })}
      </div>
    </div>
  );
}

export default Movies;