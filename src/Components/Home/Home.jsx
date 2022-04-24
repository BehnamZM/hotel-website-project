import React,{useState} from 'react'
import Header from '../Header/Header'
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
import Footer from '../Footer/Footer'
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
      <Structures />
      <News />
      <Reservation />
      <Partners />
      <Footer />
    </>
  )
}

export default Home