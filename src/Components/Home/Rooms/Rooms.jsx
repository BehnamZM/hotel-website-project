import React, { useState } from 'react'
import Roomcard from './RoomCard/RoomCard'
import roomsData from './RoomsData'
import './Rooms.css'

function Rooms() {

  const [roomsInfos , setRoomsInfos] = useState(roomsData)
  return (
    <div className="container rooms-container">
      <div className="rooms-title">
        <h5>هتل بینظیر کاپا</h5>
        <h3>اتاقها و سوییتها</h3>
      </div>
      <div className="rooms-cards">
        {
          roomsInfos.map(roomInfos => (
            <Roomcard {...roomInfos} key={roomInfos.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Rooms