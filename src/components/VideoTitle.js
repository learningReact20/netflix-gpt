import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className=' text-white'>
            <button className='bg-white text-black px-12 p-4 text-xl rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='mx-3 bg-gray-500 text-white px-12 p-4 text-xl bg-opacity-50 rounded-lg'> More Info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
