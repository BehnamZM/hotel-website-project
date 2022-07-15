import React, { useState } from 'react'
import './Facilities.css'
import {GiAirplaneArrival} from 'react-icons/gi'
import {AiFillCar} from 'react-icons/ai'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {FaSwimmingPool} from 'react-icons/fa'
import {AiOutlineWifi} from 'react-icons/ai'
import {MdOutlineFreeBreakfast} from 'react-icons/md'

function Facilities() {
  return (
    <>
      <div className="facilities-part container">
        <div className="facilities-header">
          <h5>سرویسهای ما</h5>
          <h3>امکانات هتل</h3>
        </div>
        <div className="facilities-cards">

          <div className="facility-card">
            <div className="facility-card-body">
              <GiAirplaneArrival className='facility-icon' />
              <h6>حمل و نقل تا فرودگاه</h6>
              <p>'ما در زمان ورود شما را از فرودگاه می آوریم و در هنگام ترک کردن شما را تا فرودگاه همراهی میکنیم</p>
            </div>
          </div>

          <div className="facility-card">
            <div className="facility-card-body">
              <AiFillCar className='facility-icon' />
              <h6>فضای پارکینگ</h6>
              <p>'ما فضای قابل ملاحظه ای را برای پارک اتومبیل های شما در نظر گرفته ایم تا دغدغه پارک ماشین نداشته باشید</p>
            </div>
          </div>

          <div className="facility-card">
            <div className="facility-card-body">
              <MdOutlineBedroomParent className='facility-icon' />
              <h6>سرویسهای اتاق</h6>
              <p>ما هر زمان که شما بخواهید آماده ارائه سرویس مانند نظافت برای هر اتاق هستیم </p>
            </div>
          </div>

          <div className="facility-card">
            <div className="facility-card-body">
              <FaSwimmingPool className='facility-icon' />
              <h6>استخر شنا</h6>
              <p>این مجموعه فضای بسیار لوکس و بزرگی را برای شنا کردن همه گروه های سنی فراهم آورده است</p>
            </div>
          </div>

          <div className="facility-card">
            <div className="facility-card-body">
              <AiOutlineWifi className='facility-icon' />
              <h6>اینترنت وای فای</h6>
              <p>تمام قسمت های مجموعه ما قابلیت اتصال به اینترنت پرسرعت را داراست</p>
            </div>
          </div>

          <div className="facility-card">
            <div className="facility-card-body">
              <MdOutlineFreeBreakfast className='facility-icon' />
              <h6>صبحانه</h6>
              <p>هتل کاپا دارای رستورانی کم نظیر است و تنوع غذایی فوق العاده ای دارد و امکان سرو در اتاق ها نیز وجود دارد</p>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}


export default Facilities