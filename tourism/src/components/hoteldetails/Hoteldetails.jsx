import React from 'react'
import './hoteldetails.css';
import CallIcon from '@mui/icons-material/Call';
import StarIcon from '@mui/icons-material/Star';
const Hoteldetails = () => {
  let starCount = 5;
  const rating = Array.from({ length: starCount }, (_, index) => (
    <StarIcon key={index} />
  ));
  return (
    <div className='wrapper'>
      <img src="/mainbg.jpg" alt="" className='hotelimg' />
      <div className='middlediv'>
        <div className='name'>hotelname</div>
        <div>{rating}</div>
      </div>
      <div className='contact'>
        <div>Distance</div>
        <CallIcon style={{ fontSize: '30px'}}/>
      </div>
    </div>
  )
}

export default Hoteldetails
