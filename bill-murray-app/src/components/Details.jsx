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
function Details(props) {
  const [counter, setCounter] = useState(1);
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
    <div>
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
      <ul>
          {data.list
          .filter(element=> element._id===props.id)
          .map(movies => {
              return (
                  <li key={movies._id}>
                      <p>Year: {movies.year}</p>
                      <p>Director: {movies.director}</p>
                      <p>Rol: {movies.role}</p>
                      <img src={movies.img_url} alt="image"/>
                    
                  </li>
              )
          })}
      </ul>
    </div>
  );
}

export default Details;