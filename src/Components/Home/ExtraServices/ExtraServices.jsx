import React, { useState } from 'react'
import './ExtraServices.css'
import ServiceCard from './ServiceCard/ServiceCard'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import ReservePhone from '../../ReservePhone/ReservePhone'



function ExtraServices() {

  const [servicesInfo, setServicesInfo] = useState([
    { src: './src/assets/hotel6.jpg', title: 'نظافت اتاق', price: '100,000', time: 'روزانه', serviceinfo1: 'با بهترین مواد شوینده', serviceinfo2: 'با مجرب ترین نیروهای خدماتی', serviceinfo3: 'در کوتاه ترین زمان ممکن' },
    { src: './src/assets/hotel7.jpg', title: 'صندوق امانات', price: '300,000', time: 'ماهانه', serviceinfo1: 'با بهترین نیروهای امنیتی', serviceinfo2: 'بهترین و قابل اعتمادترین تجهیزات', serviceinfo3: 'دسترسی به صندوق در هر ساعت از شبانه روز' },
    { src: './src/assets/hotel8.jpg', title: 'اتاق ماساژ', price: '500,000', time: 'هر بار', serviceinfo1: 'زیر نظر اساتید مجرب', serviceinfo2: 'در محیطی آرام و زیبا', serviceinfo3: 'با کمترین قیمت و بیشترین بازدهی' },
    { src: './src/assets/hotel10.jpg', title: 'صبحانه', price: '100,000', time: 'هر نفر', serviceinfo1: 'تنوع بینظیر در منو', serviceinfo2: 'بهترین مواد اولیه برای طبخ', serviceinfo3: 'طبخ صبحانه به صورت اختصاصی برای هر شخص' },
  ])
  return (
    <div className='services-part'>
      <div className="container services-container">
        <div className="services-explain">
          <h5>بهترین قیمت ها</h5>
          <h3>سرویسهای بیشتر</h3>
          <p>در هتل کاپا میتوانید با کمترین هزینه بهترین سرویسها را تجربه کنید که استخر و سالن ماساژ و صندوق امانات و نظافت اتاق با مجرب ترین افراد تنها گوشه ای از این سرویسها هستند.</p>
          <ReservePhone />
        </div>
        <div className="services-slider">
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
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {servicesInfo.map(serviceInfo => (
              <SwiperSlide>
                <ServiceCard {...serviceInfo} />
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>
    </div>
  )
}

export default ExtraServices