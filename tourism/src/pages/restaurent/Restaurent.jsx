import React from 'react'
import Restdetails from '../../components/restdetails/Restdetails'
import './restaurent.css'
const Restaurent = () => {
    let restCount = 4;
  const rests = Array.from({ length: restCount }, (_, index) => (
    <Restdetails key={index} />
  ));
  return (
    <div className='parent'>
      <h2>Restaurents</h2>
      
      {rests}

    </div>
  )
}

export default Restaurent
