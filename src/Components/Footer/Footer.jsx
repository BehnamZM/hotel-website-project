import React from 'react'
import './Footer.css'
import ReservePhone from '../ReservePhone/ReservePhone'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="footer container">
        <div className="footer-about">
          <h3>درباره هتل</h3>
          <p>به هتل لوکس و بینظیر کاپا خوش آمدید ما در این مجموعه بزرگ سعی داریم تا تجربه یک اقامت فوق العاده و جذاب را به شما عزیزان بچشانیم. به ما اعتماد کنید.منتظرتان هستیم...</p>
        </div>
        <div className="footer-explore">
          <li>خانه</li>
          <li>درباره ما</li>
          <li>رستوران</li>
          <li>سالن ماساژ</li>
          <li>اتاقها و سوییتها</li>
          <li>ارتباط با ما</li>
        </div>
        <div className="footer-contact">
          <div className="address">
            <h6>ایران، جزیره کیش، هتل بزرگ کاپا</h6>
          </div>
          <ReservePhone />
          <div className="email">behnamzare100@yahoo.com</div>
          <div className="socials">
            <FiInstagram className='social-icon'/>
            <FiTwitter className='social-icon'/>
            <FiYoutube className='social-icon'/>
            <FiFacebook className='social-icon'/>
            <FaWhatsapp className='social-icon'/>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>تمام حقوق این وبسایت متعلق به آقای بهنام زارع است.</p>
      </div>
    </footer>
  )
}

export default Footer