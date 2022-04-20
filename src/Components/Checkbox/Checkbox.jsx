import React from 'react'
import Childcheck from './Childcheck/Childcheck'
import Roomcheck from './Roomcheck/Roomcheck'
import './Checkbox.css'

function Checkbox() {
  return (
    <>
      <div className="checkroom">
          <button>چک کن</button>
          <Roomcheck />
          <Childcheck />
          <div className="calendar">تاریخ ورود</div>
          <div className="calendar">تاریخ خروج</div>
        </div>
    </>
  )
}

export default Checkbox