import React from 'react'
import TrainIcon from '@mui/icons-material/Train';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import './travel.css'
const Travel = () => {
  return (
    <div className='parent'>
      <div className='headline'>How to travel</div>
    <div className='travelbox'>
        <div className='icons'>
        <TrainIcon fontSize="large" style={{ fontSize: '48px', marginTop: '15px' }}/> 
        <p>Lorem ipsum dolor sit amet,tempore recusandae ullam quisquam saepe eos consequuntur dolorem exercitationem?</p>
        </div>
        <div className='icons'>
        <AirportShuttleIcon fontSize="large" style={{ fontSize: '48px', marginTop: '15px' }}/> 
        <p>Lorem ipsum dolor sit amet,tempore recusandae ullam quisquam saepe eos consequuntur dolorem exercitationem?</p>
        </div>
        <div className='icons'>
        <LocalTaxiIcon fontSize="large" style={{ fontSize: '48px' , marginTop: '15px'}}/> 
        <p>Lorem ipsum dolor sit amet,tempore recusandae ullam quisquam saepe eos consequuntur dolorem exercitationem?</p>
        </div>
        
        </div>
    </div>
  )
}

export default Travel
