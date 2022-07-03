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
        <input
          className="calendar checkitem"
          type='date'
          placeholder='تاریخ ورود'
          value="2022-01-01"
          min="2022-01-01"
          max="2023-01-01"
          />
        <input
          className="calendar checkitem"
          type='date'
          placeholder='تاریخ خروج'
          value="2022-01-01"
          min="2022-01-01"
          max="2023-01-01" />

        <button>چک کن</button>

      </div>
    </>
  )
}

export default Checkbox