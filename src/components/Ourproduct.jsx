import React from 'react'
import { PiHeart } from "react-icons/pi";
import { RiShoppingCartLine } from "react-icons/ri";
import './Header/style.css'
import a from '../assets/images/our1.png'
import b from '../assets/images/our2.png'
import c from '../assets/images/our3.png'
import d from '../assets/images/our4.png'
import e from '../assets/images/our5.png'
import f from '../assets/images/our6.png'
import g from '../assets/images/our7.png'
import h from '../assets/images/our8.png'
import i from '../assets/images/our9.png'
import j from '../assets/images/our10.png'
import k from '../assets/images/our11.png'
import l from '../assets/images/our12.png'

const Ourproduct = () => {
  const product = [
    {
      id:1,
      name:"Bell Pepper",
      price: 70.89,
      oldprice: 65.45,
      image: a,
    },

    {
      id:2,
      name:"Potato",
      price: 70.89,
      oldprice: 65.45,
      image: b,
    },

    {
        id:3,
        name:"Baby Chilli",
        price: 70.89,
        oldprice: 65.45,
        image: c,
    },

    {
        id:4,
        name:"Broccoli",
        price: 70.89,
        oldprice: 65.45,
        image: d,
    },

    {
        id:5,
        name:"Peru",
        price: 70.89,
        oldprice: 65.45,
        image: e,
    },

    {
        id:6,
        name:"Avocado",
        price: 70.89,
        oldprice: 65.45,
        image: f,
    },

    {
        id:7,
        name:"Cucumber",
        price: 70.89,
        oldprice: 65.45,
        image: g,
    },

    {
        id:8,
        name:"Beetroot",
        price: 70.89,
        oldprice: 65.45,
        image: h,
    },

    {
        id:9,
        name:"Strawberry",
        price: 70.89,
        oldprice: 65.45,
        image: i,
    },

    {
        id:10,
        name:"Corn",
        price: 70.89,
        oldprice: 65.45,
        image: j,
    },

    {
        id:11,
        name:"Cabbage",
        price: 70.89,
        oldprice: 65.45,
        image: k,
    },

    {
        id:12,
        name:"Ginger",
        price: 70.89,
        oldprice: 65.45,
        image: l,
    }
]

  return (
    <div className='our-card-wrap'>
      {product.map((item, index) => (
      <div className="our-card" key={item.id}>
        <div className="our-cardT">
          <PiHeart style={{width:'25px', height: '25px', color:'#79656D', cursor:'pointer'}}/>
        </div>
        <div className='cardM1'>
          <img src={item.image} alt="" />
        </div>
        <div className="our-cardM2">
          <h3>{item.name}</h3>
          <div className='our-price-hold'>
            <p>${item.price}</p>
            <div className='oldprice'>${item.oldprice}</div>
          </div>
        </div>
        <div className="our-cardB">
          <div className="cardBL">
            <button style={{width:'30px', height: '35px', color:'black', backgroundColor: 'white', display:'flex', justifyContent:'center', alignItems:'center', borderRadius: '5px 0px 0px 5px', border:'1px solid #F0F0F0'}}>-</button>
            <input placeholder='0' type="text" style={{textAlign:'center',width:'30px', height: '5px',padding:'14px', color:'black', backgroundColor: '#F0F0F0', display:'flex', justifyContent:'center', alignItems:'center', borderRadius: '0px', border:'1px solid #F0F0F0'}} />
            <button style={{width:'30px', height: '35px', color:'black', backgroundColor: 'white', display:'flex', justifyContent:'center', alignItems:'center', borderRadius: '0px 5px 5px 0px', border:'1px solid #F0F0F0'}}>+</button>
          </div>
          <div className="cardBR" style={{width:'35px', height: '15px',padding:'10px', backgroundColor:'#0BAF9A', borderRadius:'5px', cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <RiShoppingCartLine style={{width:'22px', height: '22px', color:'white'}} />
          </div>
        </div>
      </div>
      ) )}
    </div>
  )
}

export default Ourproduct
