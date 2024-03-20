import React from 'react'
import './Header/style.css'
import ABground from '../assets/images/freshveg.png'
import BBground from '../assets/images/orgveg.png'
import CBground from '../assets/images/fruitveg.png'
import Bestcard from './Bestcard'
import Title from './Title'

const BestSection = () => {
  return (
    <div>
        <Title props='B' />
       <div className="Bcard-wrap">
            <div className="Bcard-hold">
                <Bestcard props='A' ABground={ABground} />
                <Bestcard props='B' ABground={BBground} />
                <Bestcard props='C' ABground={CBground} />
            </div>
        </div>
    </div>
  )
}

export default BestSection
