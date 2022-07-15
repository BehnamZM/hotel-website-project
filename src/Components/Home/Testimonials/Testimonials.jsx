import React, { useState } from 'react'
import Testimonial from './Testimonial/Testimonial'
import './Testimonials.css'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import testimonial1 from '../../../assets/client1.jpg'
import testimonial2 from '../../../assets/client2.jpg'
import testimonial3 from '../../../assets/client3.jpg'

function Testimonials() {
  const [clientCommentInfos, setClientCommentInfo] = useState([
    {id:1, comment: 'من چند هفته قبل به همراه خانواده به مدت هفت روز در این هتل اقامت داشتیم و میتوانم بگویم لحظه به لحظه سفرما لذت بخش بود.جا دارد ازمجموعه هتل کاپا تشکر ویژه داشته باشم.', name: 'علی رضایی', img: testimonial1 },
    {id:2, comment: 'من در طول عمر خود در هتل های زیادی اقامت داشتم اما به جرئت میتوانم بگویم هتل کاپا بهترین آن بود و قطعا در آینده هم به اینجا باز خواهم گشت.', name: 'مرتضی کرمانی مقدم', img: testimonial2 },
    {id:3, comment: 'چیزی که مرا مجذوب خود کرد حرفه ای بودن کارکنان این هتل بود به طوری که در صورت نیاز در هر ساعتی از شب و روز آماده سرویس دهی بودند از همه آنها ممنونم', name: 'کاظم برجلو', img: testimonial3 },
  ])
  return (
    <>
      <div className="testimonials-part">
        <div className="testimonials-overlay"></div>
        <div className="testimonials-body">
          <h5>مشتریان</h5>
          <h3>درباره ما چه میگویند؟</h3>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

            {
              clientCommentInfos.map(clientCommentInfo => (
                <SwiperSlide key={clientCommentInfo.id}>
                  <Testimonial {...clientCommentInfo}/>
                </SwiperSlide>
              ))
            }

          </Swiper>

        </div>
      </div>
    </>
  )
}

export default Testimonials