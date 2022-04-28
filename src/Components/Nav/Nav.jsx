import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import {BiDownArrow} from 'react-icons/bi'
import {TiThMenuOutline} from 'react-icons/ti'

function Nav() {

  const [navbar,setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 200) {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',changeBackground)

  return (
    <nav className={navbar ? 'active' : ''}>
      <div className="nav">
        <div className="logo">
          <img src={navbar ? './src/assets/logo2.png' : './src/assets/logo.png'} />
        </div>
        <div className="links">
          <NavLink to='/' className='link'>خانه</NavLink>
          <NavLink to='/about' className='link'>درباره ما</NavLink>
          <NavLink to='/rooms' className='link'>
            اتاقها
            <BiDownArrow className='arrowicon'/>
          </NavLink>
          <NavLink to='/resturant' className='link'>رستوران</NavLink>
          <NavLink to='/gallery' className='link'>گالری</NavLink>
          <NavLink to='/news' className='link'>اخبار</NavLink>
          <NavLink to='/contact' className='link'>ارتباط باما</NavLink>
        </div>
        <div className="menuicon">
          <TiThMenuOutline />
        </div>
      </div>
    </nav>
  )
}

export default Nav