import React,{useState} from 'react'
import Rooms from '../Home/Rooms/Rooms'
import Reservation from '../Home/Reservation/Reservation'
import Partners from '../Home/Partners/Partners'
import ImgHeader from '../ImgHeader/ImgHeader'
function RoomsSuites() {

  const [headerInfo,setHeaderInfo] = useState({
    url:'url(./src/assets/hotel7.jpg)', title1:'همین حالا رزرو کن',title2:'اتاقهای ما'
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