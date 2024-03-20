import React from 'react'
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import './Header/style.css'

const Arrowbtn = ({props}) => {

  return (
    <div>
      <button className={`arrow-btn ${Arrowbtn.effect}`}>
        {props === 'left' && <RiArrowLeftSLine />}
        {props === 'right' && <RiArrowRightSLine />}
      </button>
    </div>
  )
}

export default Arrowbtn
