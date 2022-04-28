import React, { useState } from 'react'
import './About.css'
import AboutHotel from '../Home/AboutHotel/AboutHotel'
import ExtraServices from '../Home/ExtraServices/ExtraServices'
import Facilities from '../Home/Facilities/Facilities'
import Testimonials from '../Home/Testimonials/Testimonials'
import HotelTeam from './HotelTeam/HotelTeam'
import ImgHeader from '../ImgHeader/ImgHeader'
function About() {

  const [headerInfo,setHeaderInfo] = useState({
   url:'url(./src/assets/hotel8.jpg)', title1:'هتل لاکچری',title2:'درباره ما'
  })
  return (
    <>
      <ImgHeader {...headerInfo} />
      <AboutHotel />
      <ExtraServices />
      <Facilities />
      <HotelTeam />
      <Testimonials />

    </>
  )
}

export default About