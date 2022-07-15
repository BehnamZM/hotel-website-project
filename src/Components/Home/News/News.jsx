import React, { useState } from 'react'
import './News.css'
import NewsCard from './NewsCard/NewsCard'
import newsDatas from './newsData';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function News() {
  const [newsInfos, setNewsInfos] = useState(newsDatas)


  return (
    <div className="news">
      <div className="news-body container">
        <div className="news-title">
          <h5>بلاگ هتل</h5>
          <h3>اخبار ما</h3>
        </div>
        <div className="news-boxes">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >

            {
              newsInfos.map(newsInfo => (
                <SwiperSlide key={newsInfo.id}>
                  <NewsCard {...newsInfo} key={newsInfo.id} />
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default News