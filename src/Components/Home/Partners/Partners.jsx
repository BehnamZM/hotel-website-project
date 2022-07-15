import React,{useState} from 'react'
import './Partners.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

function Partners() {
  const [partners,setPartners] = useState([
    {partnersSrc:'./src/assets/partner1.png',id:1},
    {partnersSrc:'./src/assets/partner2.png',id:2},
    {partnersSrc:'./src/assets/partner3.png',id:3},
    {partnersSrc:'./src/assets/partner4.png',id:4},
    {partnersSrc:'./src/assets/partner5.png',id:5},

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