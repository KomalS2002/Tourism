import React from 'react'
import Hoteldetails from '../../components/hoteldetails/Hoteldetails'
import './hotel.css'
const Hotel = () => {
    let hotelCount = 4;
  const hotels = Array.from({ length: hotelCount }, (_, index) => (
    <Hoteldetails key={index} />
  ));
  return (
    <div className='parent'>
      <h2>Hotels</h2>
      
      {hotels}

    </div>
  )
}

export default Hotel
