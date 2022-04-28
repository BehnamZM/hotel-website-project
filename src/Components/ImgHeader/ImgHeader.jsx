import React from 'react'
import './ImgHeader.css'
function ImgHeader(props) {
  return (
    <>
      <div className="img-header" style={{backgroundImage: props.url}}>
        <div className="img-overlay">
          <div className="header-title">
            <h5>{props.title1}</h5>
            <h3>{props.title2}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImgHeader