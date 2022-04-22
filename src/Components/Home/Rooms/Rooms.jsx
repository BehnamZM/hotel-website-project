import React, { useState } from 'react'
import Roomcard from './RoomCard/RoomCard'
import './Rooms.css'

function Rooms() {

  const [roomsInfos , setRoomsInfos] = useState([
    {name:'اتاق جونیور', price:'1.000.000', src:'./src/assets/hotel8.jpg'},
    {name:'اتاق خانواده', price:'2.300.000', src:'./src/assets/hotel12.jpg'},
    {name:'دابل اتاق', price:'2.700.000', src:'./src/assets/hotel1.jpg'},
    {name:'اتاق لوکس', price:'4.000.000', src:'./src/assets/hotel9.jpg'},
    {name:'اتاق برتر', price:'1.000.000', src:'./src/assets/hotel6.jpg'},
  ])
  return (
    <div className="container rooms-container">
      <div className="rooms-title">
        <h5>هتل بینظیر کاپا</h5>
        <h3>اتاقها و سوییتها</h3>
      </div>
      <div className="rooms-cards">
        {
          roomsInfos.map(roomInfos => (
            <Roomcard {...roomInfos}/>
          ))
        }
      </div>
    </div>
  )
}

export default Rooms