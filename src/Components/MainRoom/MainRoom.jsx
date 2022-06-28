import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import mainRoomsData from '../Home/Rooms/RoomsData'
import ImgHeader from '../ImgHeader/ImgHeader'
import mainroomimg from '../../assets/hotel7.jpg'

import './MainRoom.css'
function MainRoom() {
  let params = useParams()
  const [roomsData, setRoomsData] = useState(mainRoomsData)
  const [headerInfo, setHeaderInfo] = useState({
    url: mainroomimg, title1: 'همین حالا رزرو کن', title2: 'اتاقهای ما'
  })

  let hasRoom = roomsData.some(room => (`:` + room.title) == params.roomTitle)

  let mainRoom = roomsData.find(room => (`:` + room.title) == params.roomTitle)


  return (
    <>
      {
        !hasRoom ? (
          <Navigate to="/rooms" />
        ) : (
          <>
            <ImgHeader  {...headerInfo} />
            <div className="container mainroom-container">
              <aside className='main-room-aside'>
                {roomsData.map(asideInfo => (
                  <Link to={`/room/:${asideInfo.title}`} className='aside-link'>
                    <div className="link-img">
                      <img src={asideInfo.src} alt='roomimg' className='aside-link-img' />
                      <p className='aside-link-title'>{asideInfo.name}</p>
                    </div>

                  </Link>
                ))}
              </aside>
              <div className="about-room">
                <div className="room-title">
                  <h5>نام اتاق</h5>
                  <h1>{mainRoom.name}</h1>
                </div>
                <p>{mainRoom.des}</p>
                <div className="room-gallery">
                  <img src={mainRoom.gallery1} alt="" />
                  <img src={mainRoom.gallery2} alt="" />
                  <img src={mainRoom.gallery3} alt="" />
                  <img src={mainRoom.gallery4} alt="" />
                </div>
              </div>
            </div>
          </>
        )
      }
    </>

  )
}

export default MainRoom