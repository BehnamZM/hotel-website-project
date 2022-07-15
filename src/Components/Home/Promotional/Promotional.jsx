import React, { useState } from 'react'
import './Promotional.css'
import StarBox from '../../StarBox/StarBox'
import {BsPlay} from 'react-icons/bs'

function Promotional() {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <>
      <div className="promotional-part">
        <div className="promotional-overlay">
          <div className="promotional-body">
            <StarBox />
            <h5>هتل مجلل و بینظیر کاپا</h5>
            <h3>ویدیو معرفی</h3>
            <div className="playicon-box" onClick={() => setShowVideo(true)}>
              <div className="playicon-overlay"></div>
                <BsPlay className="playicon"/>
            </div>
          </div>
        </div>
        {
          showVideo ? (<div className="video-overlay" onClick={() => setShowVideo(false)}>
          <video src="./src/assets/promotional.mp4" controls></video>
        </div>) : null
        }
        
      </div>
      
    </>
  )
}

export default Promotional