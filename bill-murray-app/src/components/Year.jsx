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
            <div className="movies">
                <form>
                    <label>Pick a year or write the title of one movie</label>
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
                            <li key={movies.id}>
                                <br></br>
                                {movies.title}
                                <br></br>
                                {movies.year}
                                <br></br>
                                {movies.director}
                                <br></br>
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