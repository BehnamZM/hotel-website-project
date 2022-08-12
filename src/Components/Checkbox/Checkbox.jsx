import React, { useState } from 'react'
import Childcheck from './Childcheck/Childcheck'
import Roomcheck from './Roomcheck/Roomcheck'
import './Checkbox.css'

function Checkbox() {
  const [comeDate, setComeDate] = useState('2022-01-01')
  const [leavingDate, setLeavingDate] = useState('2022-01-01')

  const checkRoomHandler = (e) => {
    e.preventDefault()
    alert('در حال حاضر امکان چک کردن اتاق ها وجود ندارد!')
  }
  return (
    <>
      <div className="checkroom">
        <Roomcheck />
        <Childcheck />
        <input
          className="calendar checkitem"
          type='date'
          placeholder='تاریخ ورود'
          value={comeDate}
          min="2022-01-01"
          max="2023-01-01"
          onChange={e => setComeDate(e.target.value)}
          />
        <input
          className="calendar checkitem"
          type='date'
          placeholder='تاریخ خروج'
          value={leavingDate}
          min="2022-01-01"
          max="2023-01-01" 
          onChange={e => setLeavingDate(e.target.value)}
          />

        <button onClick={checkRoomHandler}>چک کن</button>

      </div>
    </>
  )
}

export default Checkbox