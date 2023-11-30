import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviesData = useSelector(store => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector( store => store.movies?.popularMovies)
    
  return (
    
    <div className='-mt-60 relative z-20 pl-12'>
      <MovieList title={"Now playing"} movies={moviesData}/>
      <MovieList title={"Trending"} movies={moviesData}/>
      <MovieList title={"Popular"} movies={popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={moviesData}/>
    </div>
  )
}

export default SecondaryContainer
