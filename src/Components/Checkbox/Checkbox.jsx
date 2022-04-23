import React from 'react'
import Childcheck from './Childcheck/Childcheck'
import Roomcheck from './Roomcheck/Roomcheck'
import './Checkbox.css'

function Checkbox() {
  return (
    <>
      <div className="checkroom">
        <Roomcheck />
        <Childcheck />
        <div className="calendar checkitem">تاریخ ورود</div>
        <div className="calendar checkitem">تاریخ خروج</div>
        <button>چک کن</button>

      </div>
    </>
  )
}

export default Checkbox