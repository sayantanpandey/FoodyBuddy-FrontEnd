import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>FoodyBuddy is a modern online restaurant and food ordering platform that connects customers with their favorite local restaurants. The app offers a seamless way to browse menus, place orders, and get food delivered right to your doorstep. With a clean interface and easy navigation, users can explore different cuisines, track their orders in real-time, and enjoy secure payments.
</p> <p>Whether dining in, picking up, or ordering delivery, FoodyBuddy makes the food experience simple, fast, and enjoyable — your trusted buddy for all things food.</p>
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
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@FoodyBuddy.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Sayantan Pandey - All Right Reserved.</p>
    </div>
  )
}

export default Footer
