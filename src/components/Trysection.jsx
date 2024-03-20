import React from 'react'
import './Header/style.css'
import Trycard from './Trycard'
import CardBg3 from '../assets/images/afterbg3.png' 

const Trysection = () => {
  return (
    <div className='trycard-wrap'>
        <div className='trycard-hold'>
            <Trycard heading='TRY OUR NEW' text='100% Organic Best Quality Best Price' subtitle='Best Fastkart Food Quality' props='A' CardBg={CardBg3} />
        </div>
    </div>
  )
}

export default Trysection
