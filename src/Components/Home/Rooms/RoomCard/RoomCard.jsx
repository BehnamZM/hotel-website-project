import React from 'react'
import { MdOutlineBathtub,MdPool} from 'react-icons/md'
import { GiCampCookingPot } from 'react-icons/gi'
import { BiBed } from 'react-icons/bi'
import {BsArrowLeft} from 'react-icons/bs'
import './Roomcard.css'

function Roomcard(props) {
  return (
    <div className="card">
      <img src={props.src} alt="" />
      <div className="roominfo">
        <div className="price">{`هرشب / ${props.price} تومان`}</div>
        <div className="room-name">{props.name}</div>
        <span></span>
        <div className="room-detail">
          <div className="room-icons">
            <MdOutlineBathtub />
            <GiCampCookingPot />
            <MdPool />
            <BiBed />
          </div>
          <a href="">جزییات <BsArrowLeft /></a>
        </div>
      </div>
    </div>
  )
}

export default Roomcard