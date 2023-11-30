import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGpt = useSelector(store => store.gpt?.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();
  return (
    <div>
      <Header />
      {showGpt ? <GptSearch/> :<div> <MainContainer />
      <div className='bg-black'>
      <SecondaryContainer/>
      </div>
      </div>}
      
    
    </div>
  )
}

export default Browse
