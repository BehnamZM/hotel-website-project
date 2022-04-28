import React, { useEffect } from 'react'
import {GiAirplaneArrival} from 'react-icons/gi'
import {AiFillCar} from 'react-icons/ai'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {FaSwimmingPool} from 'react-icons/fa'
import {AiOutlineWifi} from 'react-icons/ai'
import {MdOutlineFreeBreakfast} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './FacilityCard.css'

function FacilityCard(props) {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <>
      <div className="facility-card" data-aos='fade-up'>
        <div className="facility-card-body">
          <GiAirplaneArrival className='facility-icon'/>
          <h6>{props.title}</h6>
          <p>{props.explain}</p>
        </div>
      </div>
    </>
  )
}

export default FacilityCard