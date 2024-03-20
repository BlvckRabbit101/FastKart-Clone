import React from 'react'
import './Header/style.css'

const Buybanner = (ban) => {

  return (
    <div className='buybanner'>
      <div style={{color:'#14B29D', fontWeight: '500', fontSize: '17px'}}>{ban.title}</div>
      <div style={{color:'#666F7F'}}>{ban.subtitle}</div>
    </div>
  )
}

export default Buybanner
