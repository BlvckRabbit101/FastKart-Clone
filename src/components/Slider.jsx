import React from 'react'
import './Header/style.css'
import { IoIosArrowDown } from "react-icons/io";

const Slider = (props) => {
  return (
    <div className={`slider ${props?.display}`} onClick={props?.closeMenu}>
        <div className={`slider-wrap ${props?.display}`} onClick={props?.closeMenu} >
            <div className="slide-head">
                <div>Menu</div>
                <div className="cancel">&times;</div>
            </div>
            <div className="slide-body">
                <div className="slide-hold">
                    <div>Home</div>
                    <IoIosArrowDown cursor='pointer' />
                </div>
                <div className="slide-hold">
                    <div>Shop</div>
                    <IoIosArrowDown cursor='pointer' />
                </div>
                <div className="slide-hold">
                    <div>Product</div>
                    <IoIosArrowDown cursor='pointer' />
                </div>
                <div className="slide-hold">
                    <div>Mega Menu</div>
                    <IoIosArrowDown cursor='pointer' />
                </div>
                <div className="slide-hold">
                    <div>Blog</div>
                    <IoIosArrowDown cursor='pointer' />
                </div>
                <div className="slide-hold">
                    <div>Pages</div>
                    <IoIosArrowDown cursor='pointer' />
                </div>
                <div className="slide-hold">
                    <div>Seller</div>
                    <IoIosArrowDown cursor='pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider
