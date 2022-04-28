import React from 'react'
import './SliderInfo.css'
import StarBox from '../../StarBox/StarBox'

function SliderInfo(props) {
  return (
    <>
      <div className="slideinfo">
        <StarBox className='slidericons' />
        <h5>{props.title}</h5>
        <h3>{props.roomInfo}</h3>
      </div>
    </>
  )
}

export default SliderInfo