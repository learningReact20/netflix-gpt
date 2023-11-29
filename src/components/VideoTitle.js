import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-24 px-12'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className='p'>
            <button className='bg-gray-500 text-white px-12 p-4 text-xl opacity-25 rounded-lg'>📨  Play</button>
            <button className='mx-3 bg-gray-500 text-white px-12 p-4 text-xl opacity-25 rounded-lg'>More Info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
