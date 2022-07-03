import React, { useState } from 'react'
import './Facilities.css'
import FacilityCard from './FacilityCard/FacilityCard'
import facilitiesDatas from './FacilitiesDatas'

function Facilities() {
  const [facilitiesInfo,setFacilitiesInfo] = useState(facilitiesDatas)
  return (
    <>
      <div className="facilities-part container">
        <div className="facilities-header">
          <h5>سرویسهای ما</h5>
          <h3>امکانات هتل</h3>
        </div>
        <div className="facilities-cards">

          {
            facilitiesInfo.map((facilityInfo , id) => (
              <FacilityCard {...facilityInfo} key={id}/>
            ))
          }
          
        </div>
      </div>

    </>
  )
}

export default Facilities