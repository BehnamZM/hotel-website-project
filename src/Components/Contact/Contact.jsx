import React,{useState} from 'react'
import './Contact.css'
import ImgHeader from '../ImgHeader/ImgHeader'
import ContactForm from './ContactForm/ContactForm'
import Reservation from '../Home/Reservation/Reservation'
import Partners from '../Home/Partners/Partners'
import contactImg from '../../assets/hotel4.jpg'
function Contact() {
  const [headerInfo,setHeaderInfo] = useState({
    url:`url(${contactImg})`, title1:'با ما در تماس باشید',title2:'ارتباط با ما'
   })
  return (
    <>
      <ImgHeader {...headerInfo} />
      <ContactForm />
      <Reservation />
      <Partners />
    </>
  )
}

export default Contact