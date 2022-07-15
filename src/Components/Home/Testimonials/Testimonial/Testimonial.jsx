import React from 'react'
import StarBox from '../../../StarBox/StarBox'
import './Testimonial.css'

function Testimonial(props) {
  return (
    <>
      <div className="testimonial-slide">
        <div className="testimonial-body">
          <p>{props.comment}</p>
          <div className="client-profile">
            <img src={props.img} alt="testimonialImg" />
            <div className="client-profile-details">
              <StarBox />
              <h6 className="client-name">{props.name}</h6>
              <p> نظر میهمان ما</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial