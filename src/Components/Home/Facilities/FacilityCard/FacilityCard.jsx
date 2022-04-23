import React from 'react'
import {GiAirplaneArrival} from 'react-icons/gi'
import {AiFillCar} from 'react-icons/ai'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {FaSwimmingPool} from 'react-icons/fa'
import {AiOutlineWifi} from 'react-icons/ai'
import {MdOutlineFreeBreakfast} from 'react-icons/md'

import './FacilityCard.css'

function FacilityCard(props) {
  return (
    <>
      <div className="facility-card">
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