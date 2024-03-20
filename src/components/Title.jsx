import React from 'react'
import './Header/style.css'
import Arrowbtn from './Arrowbtn'

const Title = ({props}) => {
  return (
    <div className='title-hold'>
      <div className="title-wrap">
        <h1 className="title-title">
        {props === 'A' && 'Shop by Categories'}
        {props === 'B' && "Best Value"}
        {props === 'C' && "Deal Of The Day"}
        </h1>
        <div className="title-btn">
            <Arrowbtn props = 'left'/>
            <Arrowbtn props = 'right'/>
        </div>
      </div>
    </div>
  )
}

export default Title
