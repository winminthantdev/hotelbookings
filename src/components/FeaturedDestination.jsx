import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import {  useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center bg-slate-50 px-6 md:px-16 lg:px-24 py-20'>
        <Title title='Feature Destination' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.' />
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room, index)=>(
            <HotelCard  key={room._id} room={room} index={index} />
        ))}
      </div>
      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer my-6 px-4 py-2'>View All Destinations</button>
    </div>
  )
}

export default FeaturedDestination
