// import React from 'react'
import './style.css'
import Input from './Input'
import Icons from './Icons'
import Logo from '../../assets/images/fastkartlogo.png'
import Location from '../../assets/images/location.svg'
import Dropdown from '../../assets/images/arrow-down.svg'
import { IoIosArrowDown } from "react-icons/io";
import {MdOutlineLocationOn} from "react-icons/md";
import { useState } from 'react'
import Cartdetail from "../Cart"
import Button from '../Button'
import { HiOutlineViewGrid } from "react-icons/hi";
import Slider from '../Slider'

const Header = () => {
  const [change, setChange] = useState('not-change')
  const [toggle, setToggle] = useState('not-show')

  const openMenu = ()=> {
    setToggle('show')
  }

  const closeMenu = ()=> {
    setToggle('not-show')
  }
  return (
    <>
    <div>
      
      <div className='container'>
        <div className='left'>
            <div className="menu" onClick={openMenu}><HiOutlineViewGrid style={{width:'25px', height:'25px', color:'black', cursor:'pointer'}} /></div>
            <img className='logo' src={Logo} cursor='pointer' />
            <div>
              <MdOutlineLocationOn size='25px' cursor='pointer' />
            </div>
            <Input />
       </div>
        <div className='right'>
            <div className="search">< Icons display='D'/></div>
            <div className='LD'><span>Language</span><span><IoIosArrowDown cursor='pointer'  /></span></div>
            <div className="line"></div>
            <div className='LD' ><span>Dollar</span><span><IoIosArrowDown cursor='pointer' /></span></div>
            <Icons display='A'/>
            <div className="line"></div>
            <Icons display='C'/>
            <div className="line"></div>
            <div>
              <div onMouseOver={() => setChange('change')} 
              onMouseLeave={() => setChange('not-change')}
              ><Icons display='B'/></div>

              <div className={`modal ${change}`}
              onMouseOver={() => setChange('change')} 
              onMouseLeave={() => setChange('not-change')}>
                <Cartdetail title='Fantasy Crunchy Chocolate' price='80.58' />
                <Cartdetail title='Peanut Butter Bites' price='25.33' />

                <div className='line2'></div>
                <div className="pricehold">
                  <div>Price :</div>
                  <span>$108</span>
                </div>
                <div className="pricehold">
                  <Button effect='hoverClass' title="View Cart" />
                  <Button title="Checkout" />
                </div>

              </div>

              
            </div>
            
        </div>
      </div>
    </div>
    <Slider closeMenu={ closeMenu} display={toggle}/>
    
    </>
  )
}

export default Header