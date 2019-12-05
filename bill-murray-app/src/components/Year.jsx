import React, { useEffect, useState} from 'react'

function Year({props}) {
    console.log(props)
    console.log("here")
    const [year, setYear] = useState("");
    const [title, setTitle] = useState("")
    if (Object.keys(props).length === 0) {
        return <div>Loading</div>;
      } else {
        return (
            <div className="squares">
                <form>
                    <p>Pick a year or write the title of one movie</p>
                    <br></br>
                    <input
                    type="text"
                    onChange= { e=> {
                        console.log(e.target.value.toLowerCase())
                        setYear(e.target.value)
                        setTitle((e.target.value.toLowerCase()))
                    }}
                    ></input>
                </form>
                <ul>
                    {props.filter(movies =>movies.year===year || movies.title.toLowerCase()===title)
                    .map(movies => {
                        return (
                            <li key={movies._id}>
                                <p><a href={`http://localhost:3000/details/${movies._id}`}>Title: {movies.title}</a></p>
                                <p>Year: {movies.year}</p>
                                <p>Director: {movies.director}</p>
                                <p>Rol: {movies.role}</p>
                                <img src={movies.img_url} alt="image"/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
      }
    
}

export default Year