import React,{useState} from 'react'
import Header from '../Header/Header'
import "./Home.css"
import AboutHotel from './AboutHotel/AboutHotel'
import Rooms from './Rooms/Rooms'
import ExtraServices from './ExtraServices/ExtraServices'
import Promotional from './Promotional/Promotional'
import Facilities from './Facilities/Facilities'
import Testimonials from './Testimonials/Testimonials'
function Home() {
  
  return (
    <>
      <Header />
      <AboutHotel />
      <Rooms />
      <ExtraServices />
      <Promotional />
      <Facilities />
      <Testimonials/>
    </>
  )
}

export default Home