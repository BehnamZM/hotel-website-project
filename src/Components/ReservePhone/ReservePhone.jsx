import React from 'react'
import './ReservePhone.css'
import { FiPhoneCall } from 'react-icons/fi'

function ReservePhone() {
  return (
    <div className="reservation">
          <div className="phonenumber">
            <p>رزرو کن</p>
            <h4>0216600000</h4>
          </div>
          <FiPhoneCall className="phoneicon" />
        </div>
  )
}

export default ReservePhone