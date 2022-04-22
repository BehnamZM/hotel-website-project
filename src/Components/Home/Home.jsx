import React,{useState} from 'react'
import Header from '../Header/Header'
import "./Home.css"
import AboutHotel from './AboutHotel/AboutHotel'
import Rooms from './Rooms/Rooms'
import ExtraServices from './ExtraServices/ExtraServices'

function Home() {
  
  return (
    <>
      <Header />
      <AboutHotel />
      <Rooms />
      <ExtraServices />
    </>
  )
}

export default Home