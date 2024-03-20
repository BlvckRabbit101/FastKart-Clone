import React from 'react'
import './Header/style.css'
import Logo from './../assets/images/fastkartlogo.png'
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoGoogle } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialPinterest } from "react-icons/ti";
import Gplay from '../assets/images/Gplay.svg'
import Aplay from '../assets/images/appstore.svg'
import { RiArrowRightSLine } from "react-icons/ri";
import {MdOutlineLocationOn} from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { TbMail } from "react-icons/tb";
import { PiPrinterBold } from "react-icons/pi";
import visa from "../assets/images/visa.png"
import master from "../assets/images/master-card.png"
import american from "../assets/images/american.png"
import discover from "../assets/images/discover.png"
import giro from "../assets/images/giro-pay.png"

const Footer = () => {
  return (
    <div className='footer-hold'>
      <div className="footer-wrap">
        <div className="foot-top">
            <div className="foot-hold">
                <img className='logo' src={Logo} cursor='pointer' />
                <p>it is a long established fact that a reader will be distracted by the readable content.</p>
                <div className="foot-social">
                    <TiSocialFacebook className='socials' />
                    <BiLogoGoogle className='socials' />
                    <TiSocialTwitter className='socials' />
                    <RiInstagramLine className='socials'/>
                    <TiSocialPinterest className='socials'/>
                </div>
                <div className="foot-play">
                    <img src={Gplay} alt="" style={{cursor:'pointer'}} />
                    <img src={Aplay} alt="" style={{cursor:'pointer'}} />
                </div>
            </div>
            <div className="foot-hold">
                <h3>About Fastkart</h3>
                <div className="foot-nav">
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>About Us</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Contact Us</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Terms and Conditions</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Careers</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Latest Blog</p>
                    </nav>
                </div>
            </div>
            <div className="foot-hold">
                <h3>Useful Links</h3>
                <div className="foot-nav">
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Your Order</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Your Account</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Track Orders</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Your Wishlist</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>FAQs</p>
                    </nav>
                </div>
            </div>
        </div>
        <div className="foot-mid">
            <div className="foot-hold">
                <h3>Categories</h3>
                <div className="foot-nav">
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Fresh Vegetables</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Hot Spice</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>Brand New Bags</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>New Bakery</p>
                    </nav>
                    <nav>
                        <RiArrowRightSLine className='arrowNav' />
                        <p>New Grocery</p>
                     </nav>
                </div>
            </div>
            <div className="foot-hold">
                <h3>Store Information</h3>
                <div className="foot-nav">
                    <nav>
                        <MdOutlineLocationOn className='arrowNav' />
                        <p>Fastkart Demo Store, Demo store Lagos</p>
                    </nav>
                    <nav>
                        <PiPhoneCall className='arrowNav' />
                        <p>Call us: 123-456-7890</p>
                    </nav>
                    <nav>
                        <TbMail className='arrowNav' />
                        <p>Email Us: Support@Fastkart.com</p>
                    </nav>
                    <nav>
                        <PiPrinterBold className='arrowNav' />
                        <p>Fax: 123456</p>
                    </nav>
                </div>
            </div>
        </div>
        
        <hr style={{border:'1px solid #F0F0F0'}}/>
        <div className="foot-btm">
            <p>2022 Copyright By Themeforest Powered By Pixelstrap</p>
            <div className="foot-social">
                <img src={visa} alt="" style={{width:'40px', height:'30px', objectFit:'contain'}} />
                <img src={discover} alt="" style={{width:'40px', height:'30px', objectFit:'contain'}} />
                <img src={american} alt="" style={{width:'40px', height:'30px', objectFit:'contain'}} />
                <img src={master} alt="" style={{width:'40px', height:'30px', objectFit:'contain'}} />
                <img src={giro} alt="" style={{width:'40px', height:'30px', objectFit:'contain'}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
