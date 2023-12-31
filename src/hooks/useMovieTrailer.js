import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
 //fetch trailer video & updating the store with trailer video data
 import {useSelector } from 'react-redux'


 const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const trailerV = useSelector( store => store.movies?.trailerVideo);


    const getMovieVideos = async () =>{

       const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
       const json = await data.json();
   
       const filterData = json.results.filter((video) =>video.type == 'Trailer' );
       const trailer = filterData.length? filterData[0]: json.results[0];
       dispatch(addTrailerVideo(trailer))
       
    }
   
   useEffect(() =>{
    if (movieId) {
        getMovieVideos();
    }
   },[movieId])
 }
 

export default useMovieTrailer;