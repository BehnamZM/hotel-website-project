import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
// import {BiDownArrow} from 'react-icons/bi'
import { TiThMenuOutline } from 'react-icons/ti'
import logo1 from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiYoutube } from 'react-icons/fi'
import { FiFacebook } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

function Nav() {

  const [navbar, setNavbar] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const showMenuHandler = () => {
    setShowMenu(!showMenu)
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? 'active' : ''}>
      <div className="nav">
        <div className="logo">
          <img src={navbar ? logo2 : logo1} />
        </div>
        <div className={!showMenu ? 'hidden-links links' : 'show-links links'}>
          <span className='close-menu' onClick={showMenuHandler}>
            <AiOutlineCloseCircle />
          </span>
          <NavLink to='/' className='link' onClick={showMenuHandler}>خانه</NavLink>
          <NavLink to='/about' className='link' onClick={showMenuHandler}>درباره ما</NavLink>
          <NavLink to='/rooms' className='link' onClick={showMenuHandler}>
            اتاقها
            {/* <BiDownArrow className='arrowicon'/> */}
          </NavLink>
          <NavLink to='/resturant' className='link' onClick={showMenuHandler}>رستوران</NavLink>
          <NavLink to='/gallery' className='link' onClick={showMenuHandler}>گالری</NavLink>
          <NavLink to='/news' className='link' onClick={showMenuHandler}>اخبار</NavLink>
          <NavLink to='/contact' className='link' onClick={showMenuHandler}>ارتباط باما</NavLink>
          <div className="socials">
            <FiInstagram className='social-icon' />
            <FiTwitter className='social-icon' />
            <FiYoutube className='social-icon' />
            <FiFacebook className='social-icon' />
            <FaWhatsapp className='social-icon' />
          </div>
        </div>
        <div className="menuicon" onClick={showMenuHandler}>
          <TiThMenuOutline />
        </div>
      </div>
    </nav>
  )
}

export default Nav