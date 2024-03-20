import React from 'react'
import './Header/style.css'
import Button from './Button'

const Trycard = ({text,subtitle, CardBg,heading}) => {
  return (
    <div className='try-card' style={{backgroundImage:`url(${CardBg})`}}>
      <div className='try-title' style={{color:'#0BAFA5'}}>{heading}</div>
      <div className='try-text'style={{color:'#222'}}>{text}</div>
      <div className='try-subtitle' style={{color:'#4A557D'}}>{subtitle}</div>
      <Button effect='shopClass' title='Shop Now'/>
      
    </div>
  )
}

export default Trycard
