import React from 'react'
import './Header/style.css'
import Button from './Button'

const Aftercard = ({props,text,subtitle, CardBg,heading, color}) => {
  return (
    <div className='after-card' style={{backgroundImage:`url(${CardBg})`}}>
      <div className={`after-title ${color}`}>{heading}</div>
      <div className={`after-text ${color}`}>{text}</div>
      <div className={`after-subtitle ${color}`}>{subtitle}</div>
      
      {props === 'A' && <Button effect='shopClass2' title='Shop Now'/>}
      {props === 'B' && <Button effect='shopClass' title='Shop Now'/>}
      
    </div>
  )
}

export default Aftercard
