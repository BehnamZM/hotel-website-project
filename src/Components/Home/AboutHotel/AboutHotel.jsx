import React, { useEffect } from 'react'
import './AboutHotel.css'
import StarBox from '../../StarBox/StarBox';
import ReservePhone from '../../ReservePhone/ReservePhone'
// import Aos from 'aos'
// import 'aos/dist/aos.css'

function AboutHotel() {


  //   useEffect(()=> {
  //     Aos.init({duration:2000})
  //   },[])
  // data-aos="fade-up"
  // data-aos="fade-up"


  return (
    <>
      <div className="container about-container">
        <div className="about-us" >
          <StarBox />
          <h5>هتل بینظیر و پنج ستاره کاپا</h5>
          <h3>از یک تجربه فوق العاده لذت ببر</h3>
          <p>به هتل لاکچری کاپا خوش آمدید ما سعی داریم تا به همراه کادری مجرب و کاردرست تجربه جذابی را برای شما عزیزان به وجود بیاوریم امیدواریم که اقامتگاه ما را برای گذراندن اوقاتی خوش انتخاب کنید.</p>
          <ReservePhone />
        </div>
        <div className="about-img" >
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