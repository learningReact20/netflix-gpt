import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import {useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
const VideoBackground = ({movieId}) => {
    const trailerV = useSelector( store => store.movies?.trailerVideo);

   useMovieTrailer(movieId)
  
  return (
    <div>
      <iframe className='w-screen aspect-video'  src={"https://www.youtube.com/embed/"+ trailerV.key + '?&autoplay=1&mute=1'} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground
