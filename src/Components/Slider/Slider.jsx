import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper"
import { FiPhoneCall } from 'react-icons/fi'
import SliderInfo from "./SliderInfo/SliderInfo";
import './Slider.css'
import Checkbox from "../Checkbox/Checkbox";
export default function App() {
  const [slideInfos, setSlideInfo] = useState([

    { title: 'یک تجربه بینظیر', roomInfo: 'از بهترین لحظات زندگی خود لذت ببرید', src: './src/assets/hotel2.jpg' },
    { title: 'بهترین سوییت ها و استراحتگاه ها', roomInfo: 'ما هستیم زیرا شما لایق بهترین ها هستید', src: './src/assets/hotel5.jpg' },
    { title: 'کافیست به ما اعتماد کنید', roomInfo: 'در بهترین مجموعه اقامتی این شهر منتظرتان هستیم ', src: './src/assets/hotel8.jpg' },
  ])

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        {slideInfos.map(slideInfo => (
          <SwiperSlide className="swiper-slide" key={slideInfo.title}>
            <img src={slideInfo.src} />
            <SliderInfo {...slideInfo} />
          </SwiperSlide>
        ))}

        <div className="reservation">
          <div className="phonenumber">
            <p>رزرو اتاق</p>
            <h4>021354878</h4>
          </div>
          <FiPhoneCall className="phoneicon" />
        </div>
        <Checkbox />
      </Swiper>

    </>
  );
}





