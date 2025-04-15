import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>At YumCrave, we believe food is not just about taste — it’s an experience. From rich Indian curries to crispy international bites, we bring diverse flavors right to your plate. Whether you're dining solo, with friends, or planning a family feast, we've got you covered with prompt delivery, great taste, and warm service.</p>
                
                    <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-6391931072</li>
                    <li>contact@yumcrave.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 © Yumcrave.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
