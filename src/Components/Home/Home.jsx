import React, { useState } from 'react'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import "./Home.css"
import AboutHotel from './AboutHotel/AboutHotel'
import Rooms from './Rooms/Rooms'
import ExtraServices from './ExtraServices/ExtraServices'
import Promotional from './Promotional/Promotional'
import Facilities from './Facilities/Facilities'
import Testimonials from './Testimonials/Testimonials'
import Structures from './Structures/Structures'
import News from './News/News'
import Reservation from './Reservation/Reservation'
import Partners from './Partners/Partners'

function Home() {
  const [slideInfos, setSlideInfo] = useState([

    { title: 'یک تجربه بینظیر', roomInfo: 'از بهترین لحظات زندگی خود لذت ببرید', src: './src/assets/hotel2.jpg' },
    { title: 'بهترین سوییت ها و استراحتگاه ها', roomInfo: 'ما هستیم زیرا شما لایق بهترین ها هستید', src: './src/assets/hotel5.jpg' },
    { title: 'کافیست به ما اعتماد کنید', roomInfo: 'در بهترین مجموعه اقامتی این شهر منتظرتان هستیم ', src: './src/assets/hotel8.jpg' },
  ])
  return (
    <>
      <Header>
        {slideInfos.map(slideInfo => (
          <Slider {...slideInfo} />
        ))}
      </Header>
      <AboutHotel />
      <Rooms />
      <ExtraServices />
      <Promotional />
      <Facilities />
      <Testimonials />
      <Structures />
      <News />
      <Reservation />
      <Partners />
    </>
  )
}

export default Home