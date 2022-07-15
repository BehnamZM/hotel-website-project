import React,{useState} from 'react'
import Rooms from '../Home/Rooms/Rooms'
import Reservation from '../Home/Reservation/Reservation'
import Partners from '../Home/Partners/Partners'
import ImgHeader from '../ImgHeader/ImgHeader'
import roomsImg from '../../assets/hotel7.jpg'
function RoomsSuites() {

  const [headerInfo,setHeaderInfo] = useState({
    url:`url(${roomsImg})`, title1:'همین حالا رزرو کن',title2:'اتاقهای ما'
   })
  return (
    <>
      <ImgHeader  {...headerInfo}/>
      <Rooms />
      <Reservation />
      <Partners />
    </>
  )
}

export default RoomsSuites