import React from 'react'
import './Header/style.css'
import a from '../assets/images/2.png'
import b from '../assets/images/1.png'
import c from '../assets/images/6.png'
import d from '../assets/images/3.png'
import e from '../assets/images/4.png'
import f from '../assets/images/5.png'


const Shopitem = (props) => {

  const product = [
    {
      id:1,
      name:"Rice, Flour & Grains",
      image: a,
    },

    {
      id:2,
      name:"Oils, Refined & Ghee",
      image: b,
    },

    {
        id:3,
        name:"Fresh Fruits & Vegetables",
        image: c,
    },

    {
        id:4,
        name:"Food Cupboard",
        image: d,
    },

    {
        id:5,
        name:"Dals & Pulses",
        image: e,
    },

    {
        id:6,
        name:"Drinks & Beverages",
        image: f,
    }
]

  return (
    <div>
      <div className="shop-wrap">
        <div className="shop-item">
        {product.map((item, index) => (
            <div className='itemData' key={item.id}>
                <div className='rue'>
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.name}</h3>
            </div>
            
        ) )}
        </div>
          

      </div>
    </div>
  )
}

export default Shopitem
