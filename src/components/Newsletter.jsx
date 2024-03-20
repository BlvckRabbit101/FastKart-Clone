import React from 'react'
import './Header/style.css'
import NewsBg from '../assets/images/newsletterbg.png'
import Newsimg from '../assets/images/newsletterimg.png'
import Button from './Button'

const Newsletter = () => {
  return (
    <div className='news-wrap'>
      <div className="news-hold">
        <div className="news-card" style={{backgroundImage:`url(${NewsBg})`}}>
            <div className="news-left">
                <div className="news-title">Subscribe to the newsletter</div>
                <div className="news-text">
                    Join our subscribers list to get the latest news, updates and special offers
                    delivered directly in your inbox.
                </div>
                <div className="news-btn">
                    <input type="text" placeholder='Enter your email'/>
                    <div><Button effect='shopClass2' title='Subscribe'/></div>
                </div>

            </div>
            <div className="news-right">
                <img className='news-img' src={Newsimg} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
