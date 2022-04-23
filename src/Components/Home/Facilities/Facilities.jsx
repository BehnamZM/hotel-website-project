import React, { useState } from 'react'
import './Facilities.css'
import FacilityCard from './FacilityCard/FacilityCard'

function Facilities() {
  const [facilitiesInfo,setFacilitiesInfo] = useState([
    {title:'حمل و نقل تا فرودگاه',explain:'ما در زمان ورود شما را از فرودگاه می آوریم و در هنگام ترک کردن شما را تا فرودگاه همراهی میکنیم',icon:'GiAirplaneArrival'},
    {title:'فضای پارکینگ',explain:'ما فضای قابل ملاحظه ای را برای پارک اتومبیل های شما در نظر گرفته ایم تا دغدغه پارک ماشین نداشته باشید',icon:'AiFillCar'},
    {title:'سرویسهای اتاق',explain:'ما هر زمان که شما بخواهید آماده ارائه سرویس مانند نظافت برای هر اتاق هستیم ',icon:'MdOutlineBedroomParent'},
    {title:'استخر شنا',explain:'این مجموعه فضای بسیار لوکس و بزرگی را برای شنا کردن همه گروه های سنی فراهم آورده است',icon:'FaSwimmingPool'},
    {title:'اینترنت وای فای',explain:'تمام قسمت های مجموعه ما قابلیت اتصال به اینترنت پرسرعت را داراست',icon:'AiOutlineWifi'},
    {title:'صبحانه',explain:'هتل کاپا دارای رستورانی کم نظیر است و تنوع غذایی فوق العاده ای دارد و امکان سرو در اتاق ها نیز وجود دارد',icon:'MdOutlineFreeBreakfast'},
  ])
  return (
    <>
      <div className="facilities-part container">
        <div className="facilities-header">
          <h5>سرویسهای ما</h5>
          <h3>امکانات هتل</h3>
        </div>
        <div className="facilities-cards">

          {
            facilitiesInfo.map(facilityInfo => (
              <FacilityCard {...facilityInfo}/>
            ))
          }
          
        </div>
      </div>

    </>
  )
}

export default Facilities