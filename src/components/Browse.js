import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <div className='bg-black'>
      <SecondaryContainer/>
      </div>
    </div>
  )
}

export default Browse
