import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'id='contact-us'>      
        <div className="footer-left">
            <h2>Links</h2>
            <ul className='footer-left list'>
                <li><Link to='/'>Home</Link></li>
                <li><a href='#doctors'>Doctors</a></li>
                <li>Appointments</li>
                <li>Notification</li>
                <li>Apply for Doctors</li>
                <li><a href='#contact-us'>Contact Us</a></li>
            </ul>
        </div>
        <div className="footer-right">
              <h2>Social Links</h2>
               <div className="links">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div> 
        </div>       
    </div>
  )
}

export default Footer