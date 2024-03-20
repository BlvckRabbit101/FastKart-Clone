import React from 'react'
import Oursection from './Oursection'
import Ourproduct from './Ourproduct'
import './Header/style.css'

const Topsection = () => {
  return (
    <div className='topsection'>
      <div className="top-wrap">
        <h3>Top Products</h3>
        <Ourproduct />
      </div>
    </div>
  )
}

export default Topsection
