import React from 'react'
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

  return (
    <>
      <Header>
        <Slider />
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