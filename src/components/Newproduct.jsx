import React from 'react'
import Arrowbtn from './Arrowbtn'

const Newproduct = (props) => {
  return (
    <div className='new-card'>
      <div className="new-top">
        <h3>{props.title}</h3>
        <div className="title-btn">
            <Arrowbtn effect='arrowClass' props = 'left'/>
            <Arrowbtn effect='arrowClass' props = 'right'/>
        </div>
      </div>
      <hr/>

      <div className="new-btm">
        <div className="new-btmL">

        </div>
        <div className="new-btmR">
            <h3>{props.name}</h3>
          <div className='our-price-hold'>
            <p>${props.price}</p>
            <div className='oldprice'>${props.oldprice}</div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Newproduct
