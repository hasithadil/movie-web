import React from 'react'
import MovieCard from '../Components/MovieCard'

function Home() {

    const movies = [
        {id:1, title:"john wick",release_date:"2021"},
        {id:2, title:"wwe",release_date:"2025"},
        {id:3, title:"isa",release_date:"2023"},
        {id:4, title:"rootcode",release_date:"2022"},
        {id:5, title:"telexar",release_date:"2020"}    
    ]
 
  return (
    <div className='home'>
        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
  )
}

export default Home