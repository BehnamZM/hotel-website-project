import React from 'react'

import { useInView } from 'react-intersection-observer';

import './AboutHotel.css'
import StarBox from '../../StarBox/StarBox';
import ReservePhone from '../../ReservePhone/ReservePhone'
import aboutImg1 from '../../../assets/hotel6.jpg'
import aboutImg2 from '../../../assets/hotel7.jpg'

// aos package had some bugs

// import Aos from 'aos'
// import 'aos/dist/aos.css'

function AboutHotel() {
  const { ref: showRef, inView: visibleElement, entry } = useInView()

  //   useEffect(()=> {
  //     Aos.init({duration:2000})
  //   },[])
  // data-aos="fade-up"
  // data-aos="fade-up"


  return (
    <>
      <div className={ visibleElement ? "container about-container show-about" : "container about-container"} ref={showRef}>
        <div className="about-us" >
          <StarBox />
          <h5>هتل بینظیر و پنج ستاره کاپا</h5>
          <h3>از یک تجربه فوق العاده لذت ببر</h3>
          <p>به هتل لاکچری کاپا خوش آمدید ما سعی داریم تا به همراه کادری مجرب و کاردرست تجربه جذابی را برای شما عزیزان به وجود بیاوریم امیدواریم که اقامتگاه ما را برای گذراندن اوقاتی خوش انتخاب کنید.</p>
          <ReservePhone />
        </div>
        <div className="about-img" >
          <div className='img-one'>
            <img src={aboutImg1} alt="aboutImage" />
          </div>
          <div className='img-two'>
            <img src={aboutImg2} alt="aboutImage" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutHotel