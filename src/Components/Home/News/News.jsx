import React, { useState } from 'react'
import './News.css'
import NewsCard from './NewsCard/NewsCard'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function News() {
  const [newsInfos, setNewsInfos] = useState([
    { part: 'رستوران', title: 'چه غذاهایی در رستوران کاپا سرو میشود؟', img: './src/assets/resturant4.jpg', id: 1 },
    { part: 'زیبایی', title: 'آرایشگاه های مردانه و زنانه هتل کاپا افتتاح شدند', img: './src/assets/client1.jpg', id: 2 },
    { part: 'سلبریتی', title: 'در سال گذشته کدام شخصیتهای مشهور مهمان هتل کاپا بودند؟', img: './src/assets/client2.jpg', id: 3 },
    { part: 'سلامتی', title: 'چندین دستگاه جدید ورزشی به باشگاه اضافه شدند', img: './src/assets/gym.jpg', id: 4 },
    { part: 'سالنها', title: 'سالن لوکس هتل کاپا برای انجام مراسمات عقد و عروسی افتتاح شد', img: './src/assets/resturant7.jpg', id: 5 },
    { part: 'محیط زیست', title: 'تیم گیاهپزشکی به جهت حفاظت از فضای سبز مجموعه آغاز به کار کردند', img: './src/assets/hotel9.jpg', id: 6 },
  ])


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
                <SwiperSlide>
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