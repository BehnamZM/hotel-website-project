import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import {BiDownArrow} from 'react-icons/bi'

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <img src="./src/assets/logo.png" alt="" />
        </div>
        <div className="links">
          <Link to='/home' className='link'>خانه</Link>
          <Link to='/about' className='link'>درباره ما</Link>
          <Link to='/rooms' className='link'>
            اتاقها
            <BiDownArrow className='arrowicon'/>
          </Link>
          <Link to='/resturant' className='link'>رستوران</Link>
          <Link to='/gallery' className='link'>گالری</Link>
          <Link to='/news' className='link'>اخبار</Link>
          <Link to='/contact' className='link'>ارتباط باما</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav