import React from 'react'
import './Header/style.css'
import Button from './Button'
import Buybanner from './Buybanner'
// import ABground from '../assets/images/fresh veg.png'

const Bestcard = ({props, ABground}) => {
    // console.log(ABground)
  return (
    <div className='Bcard-item' style={{backgroundImage:`url(${ABground})`}}>
        <div className="btop">
            {props === 'A' && <Buybanner title='Buy more, Save more' subtitle='Fresh Vegetables' />}
            {props === 'B' && <Buybanner title='Save more!' subtitle='Organic Vegetables' />}
            {props === 'C' && <Buybanner title='Hot Deals!' subtitle='Fruit & Vegetables' />}
        </div>

        <div className="bbot">
            <div>
                <Button effect='buyClass' title='View Offer' />
            </div>
        </div>
    </div>
  )
}

export default Bestcard
