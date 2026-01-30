import React from 'react'
import logo from '../assets/graduation.png'
import face from '../assets/facebook.png'
import wha from '../assets/whatsapp.png'
import ist from '../assets/instagram.png'
import twi from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="image">
      <img src={logo} alt="" />
      <div className="word-img">
      <h2> EASY<span>LEARN</span></h2>
      <p>STUDY ANYWHERE YOU WANT</p>
      </div>
      </div>
    <div className="nav">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/university'>Universities & Courses</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
      </ul>
    </div>
    <div className="social-media">
      <ul>
      <li><a href="#" ><img src={face} alt="Facebook" /></a></li>
      <li><a href="#" ><img src={wha} alt="Whatsapp" /></a></li>
      <li><a href="#" ><img src={ist} alt="Instagram" /></a></li>
      <li><a href="#" ><img src={twi} alt="Twitter" /></a></li>
      <li><a href="#" ><img src={youtube} alt="YouTube" /></a></li>
      </ul>

    </div>
    </div>
  )
}

export default Navbar;
