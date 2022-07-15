import React, { useState } from 'react'
import StarBox from '../../StarBox/StarBox'
import './AboutResturant.css'
import { BiTime } from 'react-icons/bi'
function AboutResturant() {

  const [hoursInfo, setHoursInfo] = useState([
    { time: 'صبحانه:هر روز ازساعت 07:00 الی 11:00', id: 1 },
    { time: 'نهار: هر روز از ساعت 12:00 الی 14:00', id: 2},
    { time: 'شام: هر روز از ساعت  18:30 الی 22:00', id: 3},
  ])
  return (
    <>
      <div className="about-resturant container">
        <div className="about-resturant-title">
          <StarBox />
          <h5>تجربه ای بی نظیر برای سلایق خاص</h5>
          <h3>رستوران لوکس کاپا</h3>
          <p>این رستوران که توسط یکی از معروف ترین سرآشپزان کشور اداره می‌شود، به خاطر غذاهای عالی و محیط منحصربفردش مشهور است. اتاق ناهار خوری بینظیر دارای سه سالن با فضای باز است که به شما امکان می دهد از مناظر موجود در مجموعه لذت ببرید</p>
        </div>
        <div className="resturant-rules">
          <div className="hours">
            <h5>ساعات سرو غذا</h5>

            {
              hoursInfo.map(hourInfo => (
                <div className="working-hours" key={hourInfo.id}>
                  <BiTime className='hours-icon'/>
                  <p>{hourInfo.time}</p>
                </div>
              ))
            }

          </div>
          <div className="resturant-rooms-service">
            <h5>سرو در اتاق</h5>
            <p>امکان سرو غذا در داخل اتاق ها وجود دارد</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutResturant