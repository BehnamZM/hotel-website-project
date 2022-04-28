import React from 'react'
import './ButtonStyle.css'

function ButtonStyle({children}) {
  return (
    <button className='button'>
      <span className='button-overlay'></span>
      {children}
    </button>
  )
}

export default ButtonStyle