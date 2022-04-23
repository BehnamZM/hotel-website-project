import React from 'react'
import './Promotional.css'
import StarBox from '../../StarBox/StarBox'
import {BsPlay} from 'react-icons/bs'

function Promotional() {
  return (
    <>
      <div className="promotional-part">
        <div className="promotional-overlay">
          <div className="promotional-body">
            <StarBox />
            <h5>هتل مجلل و بینظیر کاپا</h5>
            <h3>ویدیو معرفی</h3>
            <div className="playicon-box">
              <div className="playicon-overlay"></div>
                <BsPlay className="playicon"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promotional