  
import React from 'react'
import Movies from './Movies'

const Results = ({ movies }) => {
  return (
    <div className="search">
      {movies.length === 0 ? (
        <h1>No Movies Found</h1>
      ) : (
        movies.map(pet => (
          <Movies
            title={movies.title}
            id={movies.id}
            year={movies.year}
            director={movies.director}

          />
        ))
      )}
    </div>
  )
}

export default Results
