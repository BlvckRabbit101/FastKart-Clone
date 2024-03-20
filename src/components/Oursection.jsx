import React from 'react'
import './Header/style.css'
import Button from './Button'
import Ourproduct from './Ourproduct'

const Oursection = () => {
  return (
    <div className='ourwrap'>
        <div className="our-hold">
            <div className="our-head">
                <h1>Our Products</h1>
                <div className='our-btn-holder'>
                    <Button effect='ourClass' title='All' />
                    <Button effect='ourClass' title='Cooking' />
                    <Button effect='ourClass' title='Fruits & Vegetables' />
                    <Button effect='ourClass' title='Beverage' />
                    <Button effect='ourClass' title='Diary' />
                </div>
            </div>

            <div className="our-card-hold">
                <Ourproduct />
            </div>   
        </div>
    </div>
  )
}

export default Oursection
