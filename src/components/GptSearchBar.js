import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageContant'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult, addGptMoviesName } from '../utils/gptSlice';

const GptSearchBar = () => {
    const selectedLang = useSelector(store => store.config?.lang);
    const searchInput = useRef(null)
    const dispatch = useDispatch();

    const searchMovieTMDB = async(movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
       const json = await data.json();
       return json.results 

    }
    const handleGptSearchClick = async(e) =>{
        e.preventDefault();
        // const gptQuery = "Act as a movie Recommendation systen and suggest soeme movies for the query :"+ searchInput.current.value +". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Hungama, Halchal"
        //  const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });
        const movies =["Andaz apna apna", "Padosan", "Hera Pheri", "Chup Chupke"];
        const promiseArray = movies.map(movie => searchMovieTMDB(movie))
        //promiseArray = [Promise, promise,Promise, promise];
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResult(tmdbResults))
        dispatch(addGptMoviesName(movies))
        console.log(tmdbResults);
    }

    
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2  bg-black grid grid-cols-12'>
        <input type='text' className='col-span-9 p-6 m-4'
         placeholder={lang[selectedLang].gptSearchPlaceholder} 
         ref={searchInput}/>

        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md'
        onClick={handleGptSearchClick}
        >{lang[selectedLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
