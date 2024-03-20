import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'
import { HiOutlineViewGrid } from "react-icons/hi";
import './Header/style.css'

const Subheader = () => {
  const [change, setChange] = useState('not-change')
  return (
    <div>
      <div className='subheader'>
        <div className="sub-wrapper">
          <div className="category">
            <HiOutlineViewGrid style={{width:'25px', height:'25px', color:'#0BAF9A', cursor:'pointer'}} />
            <div>All Categories</div>
          </div>
          <div className="line"></div>
          <div className="nav-hold">
            <div>
              <div className='LD'><span>Home</span><span><IoIosArrowDown cursor='pointer'  /></span></div>

              
            </div>
      
            <div className='LD'><span>Shop</span><span><IoIosArrowDown cursor='pointer'  /></span></div>
            <div className='LD'><span>Product</span><span><IoIosArrowDown cursor='pointer'  /></span></div>
            <div className='LD'><span>Mega Menu</span><span><IoIosArrowDown cursor='pointer'  /></span></div>

            {/* <div>
              <div className='LD' onMouseOver={() => setChange('change')} 
                onMouseLeave={() => setChange('not-change')}><span>Blog</span><span><IoIosArrowDown cursor='pointer'  /></span></div>

              <div className={`goat ${change}`}
                onMouseOver={() => setChange('change')} 
                onMouseLeave={() => setChange('not-change')}>
                  <div className='navi'>Blog Detail</div>
                  <div className='navi'>Blog Grid </div>
                  <div className='navi'>Blog List </div>
              </div>
            </div> */}
            
            <div className='LD'><span>Pages</span><span><IoIosArrowDown cursor='pointer'  /></span></div>
            
            <div>
              <div className='LD' onMouseOver={() => setChange('change')} 
                onMouseLeave={() => setChange('not-change')}><span>Seller</span><span><IoIosArrowDown cursor='pointer'  /></span></div>

              <div className={`goat ${change}`}
                onMouseOver={() => setChange('change')} 
                onMouseLeave={() => setChange('not-change')}>
                  <div className='navi'>Become a Seller</div>
                  <div className='navi'>Seller Dashboard</div>
                  <div className='navi'>Seller Detail</div>
                  <div className='navi'>Seller Detail 2</div>
                  <div className='navi'>Seller Grid </div>
                  <div className='navi'>Seller Grid 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Subheader
