import React from 'react'
import './cart.css'

const button = (btn) => {

  return (
    <div>
        <button className={`btn ${btn.effect}`}>{btn.title}</button>
    </div>
  )
}

export default button
