import React,{useState} from 'react'
import Header from '../Header/Header'
import "./Home.css"
import AboutHotel from './AboutHotel/AboutHotel'

function Home() {
  
  return (
    <>
      <Header />
      <AboutHotel />
    </>
  )
}

export default Home