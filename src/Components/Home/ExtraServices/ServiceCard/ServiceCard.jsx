import React from 'react'
import './ServiceCard.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

function ServiceCard(props) {
  return (
    <>
      <div className="servicecard">
        <img src={props.src} alt="" />
        <div className="servicebody">
          <div className="servicetitle">{props.title}</div>
          <div className="serviceprice">
            <div className="price">{props.price}</div>
            <div className="service-time">{`تومان / ${props.time}`}</div>
          </div>
          <div className="servicelist">
            <div className="service-list-item">
              <AiOutlineCheckCircle className='service-list-item-icon'/>
              <li>{props.serviceinfo1}</li>
            </div>
            <div className="service-list-item">
              <AiOutlineCheckCircle className='service-list-item-icon'/>
              <li>{props.serviceinfo2}</li>
            </div>
            <div className="service-list-item">
              <AiOutlineCheckCircle className='service-list-item-icon'/>
              <li>{props.serviceinfo3}</li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceCard