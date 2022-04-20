import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './SliderInfo.css'

function SliderInfo(props) {
  return (
    <div className="slideinfo">
      <div className="iconbox">
        <AiFillStar className='staricon' />
        <AiFillStar className='staricon' />
        <AiFillStar className='staricon' />
        <AiFillStar className='staricon' />
        <AiFillStar className='staricon' />
      </div>
      <h5>{props.title}</h5>
      <h3>{props.roomInfo}</h3>
    </div>
  )
}

export default SliderInfo