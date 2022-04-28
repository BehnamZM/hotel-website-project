import React from 'react'
import StarBox from '../../StarBox/StarBox'
import ReservePhone from '../../ReservePhone/ReservePhone'
import Checkbox from '../../Checkbox/Checkbox'
import './Reservation.css'
function Reservation() {
  return (
    <>
      <div className="reservation-part">
        <div className="reservation-overlay">
          <div className="container reservation-container">
            <div className="reservation-explain">
              <StarBox />
              <p>تمام اتاقهای ما دارای سرویسای اولیه ثابتی مانند حمام خصوصی، صبحانه، اینترنت پرسرعت و  تلویزیون هستند .</p>
              <ReservePhone />
            </div>
            <div className="reservation-check">
              <h5>اتاقها و سوییتها</h5>
              <h3>فرم رزرو هتل </h3>
              <Checkbox />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reservation