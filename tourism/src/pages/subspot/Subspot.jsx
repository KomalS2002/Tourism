import React from 'react'
import "./subspot.css"
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Dropmenu from '../../components/Dropmenu.jsx'

const Subspot = () => {
  let starCount = 5;
  const rating = Array.from({ length: starCount }, (_, index) => (
    <StarIcon key={index} />
  ));
  return (
    <div className='main'>
      <div className='left'>
        <h1>Darjeeling</h1>
        <div className='rating'>
         {rating}
          </div>
        
          <img src="/mainbg.jpg" className='picture' alt="" />
        
        <div className='desc'>Lorem ipsum dolor sit In magnam cupiditate illo quia libero, inventore iure provident incidunt sit rem eligendi dignissimos harum culpa fuga molestias iste? Nihil, dolor non!</div>
      </div>
      
      <div className='right'>
        <div className='maps'>
         <h2> View it on maps</h2>
        <LocationOnIcon style={{ fontSize: 42, marginBottom: '10px' }}  />
        </div>
        <div className='options'>
            {/* for travelling options */}
            <Dropmenu />
            {/* for restaurents */}
          <Dropmenu/>
          {/* for hotels */}
          <Dropmenu/> 
        </div>
      <button className='subbutton'>View</button>
        
      </div>
      </div>
     
  )
}

export default Subspot

