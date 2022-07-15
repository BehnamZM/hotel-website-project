import React,{useState} from 'react'
import './Partners.css'

import { Swiper, SwiperSlide } from "swiper/react";
import partner1 from '../../../assets/partner1.png'
import partner2 from '../../../assets/partner2.png'
import partner3 from '../../../assets/partner3.png'
import partner4 from '../../../assets/partner4.png'
import partner5 from '../../../assets/partner5.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

function Partners() {
  const [partners,setPartners] = useState([
    {partnersSrc:partner1,id:1},
    {partnersSrc:partner2,id:2},
    {partnersSrc:partner3,id:3},
    {partnersSrc:partner4,id:4},
    {partnersSrc:partner5,id:5},

  ])
  return (
    <>
      <div className="partners-slider container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {
            partners.map(partner => (
              <SwiperSlide key={partner.id}>
                <img src={partner.partnersSrc} alt="" key={partner.id}/>
              </SwiperSlide>
            ))
          }
          
        </Swiper>
      </div>
    </>
  )
}

export default Partners