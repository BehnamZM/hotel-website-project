import React from 'react'
import './NewsCard.css'
function NewsCard(props) {
  return (
    <>
      <div className="news-card">
        <div className="news-card-body">
          <img src={props.img} alt="" />
          <div className="news-titr">
            <h3>{props.part}</h3>
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsCard