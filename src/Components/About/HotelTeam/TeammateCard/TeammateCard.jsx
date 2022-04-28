import React from 'react'
import './TeammateCard.css'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'

function TeammateCard(props) {
  return (
    <>
      <div className="teammate-card">
        <div className="teammate-img">
          <img src={props.img} alt="teammate" />
        </div>
        <div className="teammate-profile">
          <div className="teammate-name">{props.name}</div>
          <div className="teammate-role">{props.role}</div>

          <div className="teammate-socials">
            <div className="teammate-socials-icons">
            <FiInstagram className='teammate-socials-icon'/>
            <FiTwitter className='teammate-socials-icon'/>
            <FiFacebook className='teammate-socials-icon'/>
            <FaWhatsapp className='teammate-socials-icon'/>
            </div>
            <div className="teammate-email">
              {props.email}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default TeammateCard