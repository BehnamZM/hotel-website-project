import React, { useState } from 'react'
import './HotelTeam.css'
import TeammateCard from './TeammateCard/TeammateCard'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import teamImg1 from '../../../assets/client1.jpg'
import teamImg2 from '../../../assets/client2.jpg'
import teamImg3 from '../../../assets/client3.jpg'
import teamImg4 from '../../../assets/client2.jpg'
import teamImg5 from '../../../assets/client3.jpg'
import teamImg6 from '../../../assets/client1.jpg'


function HotelTeam() {

  const [teamInfos, setTeamInfos] = useState([
    { img: teamImg1, name: 'هاشم بیک زاده', role: 'مالک هتل', email: 'hashem@yahoo.com', id: 1 },
    { img: teamImg2, name: 'مصطفی احمدی', role: 'مدیر هتل', email: 'mostafaahmadi@gmail.com', id: 2 },
    { img: teamImg3, name: 'مرتضی مقدم', role: 'مدیر داخلی هتل', email: 'mogaddam@yahoo.com', id: 3 },
    { img: teamImg4, name: 'بهنام بانی', role: 'مشاور مدیر هتل', email: 'behnambani@gmail.com', id: 4 },
    { img: teamImg5, name: 'کاظم احمدزاده', role: 'عضو هیئت مدیره', email: 'kazemahmadzade@yahoo.com', id: 5 },
    { img: teamImg6, name: 'رضا نیک نژاد', role: 'عضو هیئت مدیره', email: 'niknejad@yahoo.com', id: 6 },
  ])
  return (
    <>
      <div className="hotelteam container">
        <div className="team-title">
          <h5>حرفه ای ها</h5>
          <h3>با تیم ما ملاقات کنید</h3>
        </div>
        <div className="teammates-cards">

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {teamInfos.map(teamInfo => (
              <SwiperSlide key={teamInfo.id}>
                <TeammateCard {...teamInfo} />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>

    </>
  )
}

export default HotelTeam