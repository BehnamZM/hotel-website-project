import React from 'react'
import './StarBox.css'
import { AiFillStar } from 'react-icons/ai'

function StarBox() {
  return (
    <div className="iconbox">
        <AiFillStar className='staricon' />
        <AiFillStar className='staricon' />
        <AiFillStar className='staricon' />
        <AiFillStar className='staricon' />
        <AiFillStar className='staricon' />
      </div>
  )
}

export default StarBox