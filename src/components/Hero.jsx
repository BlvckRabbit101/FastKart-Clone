import React from 'react'
import './Header/style.css'
import heroleft from '../assets/images/hero-1.png'
import heroright from '../assets/images/hero-2.png'
import Button from '../components/Button'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-left' style={{backgroundImage:`url(${heroleft})`}}>
          <h4>ORGANIC</h4>
          <h1>100% Fresh</h1>
          <h2>Fruit & Vegetables</h2>
          <p>Free shipping on all your order. we deliver you enjoy</p>
            <Button effect='shopClass' title='Shop Now'/>
        </div>
        <div className='hero-right' style={{backgroundImage:`url(${heroright})`}}>
            <h4>Fresh & 100% Organic</h4>
            <h5>farmer's market</h5>
            <Button effect='shopClass2' title='Shop Now'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
