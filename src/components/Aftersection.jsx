import React from 'react'
import './Header/style.css'
import Aftercard from './Aftercard'
import CardBg1 from '../assets/images/afterbg1.png' 
import CardBg2 from '../assets/images/afterbg2.png' 

const Aftersection = () => {
  return (
    <div className='after-wrap'>
        <div className="after-hold">
            <Aftercard color='color' heading='premium' text='Fresh Vegetable & Daily Eating' subtitle='Get Extra 50% Off' props='A' CardBg={CardBg1} />
            <Aftercard heading='AVAILABLE' text='100% Natural & Healthy Fruits' subtitle='Weekend Special' props='B' CardBg={CardBg2} />
           
        </div>
    </div>
  )
}

export default Aftersection
