import React from 'react'
import Dropmenu from '../../components/Dropmenu.jsx'
import Button from '@mui/material/Button';
import Card from '../../components/Card/Card.jsx'
import "./Home.css"
const Home = () => {
  let cardsNum = 5;
  const cards = Array.from({ length: cardsNum }, (_, index) => (
    <Card key={index} />
  ));
  return (
    
    <div className='main' >
      <div className='menu'>
      <Dropmenu/>
      <Dropmenu/>
      </div>
      <Button variant="outlined">search</Button>
      <div className='resultbox'>
        Results based on your search....
        <div className='cards'>
         {cards}
        </div>
      </div>
    </div>
  )
}

export default Home
