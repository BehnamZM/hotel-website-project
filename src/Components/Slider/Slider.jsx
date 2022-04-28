import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper"

import SliderInfo from "./SliderInfo/SliderInfo";

import './Slider.css'

import Checkbox from "../Checkbox/Checkbox";

import ReservePhone from "../ReservePhone/ReservePhone";

export default function Slider(props) {

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
        <SwiperSlide className="swiper-slide" key={props.title}>
          <img src={props.src} />
          <SliderInfo {...props.slideInfo} />
        </SwiperSlide>
        <ReservePhone />
        <Checkbox />
      </Swiper>

    </>
  );
}





