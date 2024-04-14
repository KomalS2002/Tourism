import React from 'react'
import "./Spot.css"
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Dropmenu from '../../components/Dropmenu.jsx'

const Spot = () => {
  let starCount = 5;
  const rating = Array.from({ length: starCount }, (_, index) => (
    <StarIcon key={index} />
  ));
  return (
    <div className='maindiv'>
      <div className='leftdiv'>
        <h1>Darjeeling</h1>
        <div className='rating'>
         {rating}
          </div>
        
          <img src="/mainbg.jpg" className='picture' alt="" />
        
        <div className='desc'>Lorem ipsum dolor sit In magnam cupiditate illo quia libero, inventore iure provident incidunt sit rem eligendi dignissimos harum culpa fuga molestias iste? Nihil, dolor non!</div>
      </div>
      <div className='rightdiv'>
        <div className='maps'>
         <h2> View it on maps</h2>
        <LocationOnIcon style={{ fontSize: 42, marginBottom: '10px' }}  />
        </div>
        <div className='subspots'>
          <Dropmenu/>
        </div>
      <button className='subbutton'>View</button>
        
      </div>
    </div>
  )
}

export default Spot
