import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageContant'

const GptSearchBar = () => {
    const selectedLang = useSelector(store => store.config?.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2  bg-black grid grid-cols-12'>
        <input type='text' className='col-span-9 p-6 m-4' placeholder={lang[selectedLang].gptSearchPlaceholder} />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md'>{lang[selectedLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
