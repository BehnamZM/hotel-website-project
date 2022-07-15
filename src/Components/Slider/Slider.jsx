import React, { useState } from "react";
import './Slider.css'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper"

import SliderInfo from "./SliderInfo/SliderInfo";
import Checkbox from "../Checkbox/Checkbox";
import ReservePhone from "../ReservePhone/ReservePhone";

import sliderImg1 from '../../assets/hotel2.jpg'
import sliderImg2 from '../../assets/hotel5.jpg'
import sliderImg3 from '../../assets/hotel8.jpg'

export default function Slider() {
  const [slideInfos, setSlideInfo] = useState([

    { title: 'یک تجربه بینظیر', roomInfo: 'از بهترین لحظات زندگی خود لذت ببرید', src: sliderImg1},
    { title: 'بهترین سوییت ها و استراحتگاه ها', roomInfo: 'ما هستیم زیرا شما لایق بهترین ها هستید', src: sliderImg2 },
    { title: 'کافیست به ما اعتماد کنید', roomInfo: 'در بهترین مجموعه اقامتی این شهر منتظرتان هستیم ', src: sliderImg3 },
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
        <ReservePhone />
        <Checkbox />
      </Swiper>

    </>
  );
}





