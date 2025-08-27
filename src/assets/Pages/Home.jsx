import React, { useState } from 'react'
import MovieCard from '../Components/MovieCard'

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id:1, title:"john wick",release_date:"2021"},
        {id:2, title:"wwe",release_date:"2025"},
        {id:3, title:"isa",release_date:"2023"},
        {id:4, title:"rootcode",release_date:"2022"},
        {id:5, title:"telexar",release_date:"2020"}    
    ];

    const handleSearch = (e)=>{
        e.preventDefault()  //prevent page reload
        alert(searchQuery)
    };
 
  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input 
                type="text" 
                placeholder='Search for movies...' 
                className='search-input' 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            <button type='submit' className='search-button'>Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(
                (movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) ? (
                <MovieCard movie={movie} key={movie.id} />
                ) : null
            )}
        </div>
    </div>
  )
}

export default Home