import React from 'react'
import './AboutHotel.css'
import { AiFillStar } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'

function AboutHotel() {
  return (
    <>
      <div className="container about-container">
        <div className="about-us">
          <div className="about-icon-box">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h6>هتل بینظیر و پنج ستاره کاپا</h6>
          <h3>از یک تجربه فوق العاده لذت ببر</h3>
          <p>به هتل لاکچری کاپا خوش آمدید ما سعی داریم تا به همراه کادری مجرب و کاردرست تجربه جذابی را برای شما عزیزان به وجود بیاوریم امیدواریم که اقامتگاه ما را برای گذراندن اوقاتی خوش انتخاب کنید.</p>
          <div className="about-reservation">
            <FiPhoneCall className="about-phoneicon" />
            <div className="about-phonenumber">
              <p>رزرو اتاق</p>
              <h4>0216600000</h4>
            </div>
          </div>
        </div>
        <div className="about-img">
          <div className='img-one'>
            <img src="./src/assets/hotel6.jpg" alt="" />
          </div>
          <div className='img-two'>
            <img src="./src/assets/hotel7.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutHotel