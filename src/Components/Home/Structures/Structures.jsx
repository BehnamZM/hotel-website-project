import React, { useEffect, useState } from 'react'
import './Structures.css'
import ButtonStyle from '../../ButtonStyle/ButtonStyle'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Structures() {
  const [structuresInfo, setStructuresInfo] = useState([
    { title: 'بهترین کیفیت', name: 'رستوران کاپا', explain: 'رستوران هتل کاپا دارای یکی از کامل ترین منوهای غذایی در بین رستوران های بزرگ است.انواع دسرها، نوشیدنی های سرد وگرم ،و انواع فست فودها از دیگربخش های این مجموعه است', dir: 'rtl',img:'./src/assets/resturant7.jpg',aosImg:'fade-left',aosTitle:'fade-right' },
    { title: 'بهترین تجربه', name: 'سالن ماساژ', explain: 'در این مجموعه با بهره گیری از بهترین افراد سعی شده تا تجربه آرامش بخش یک ماساژ بینظیر را به شما هدیه کند', dir: 'ltr',img:'./src/assets/hotel9.jpg',aosImg:'fade-right',aosTitle:'fade-left' },
    { title: 'مدرن', name: 'مجموعه بدنسازی', explain: 'در سالن مدرن بدنسازی کاپا به کمک به روز ترین دستگاه های بدنسازی و مربیان با تجربه هر چه بیشتر به سلامتی جسم خود کمک کنید', dir: 'rtl',img:'./src/assets/gym.jpg',aosImg:'fade-left',aosTitle:'fade-right' },
    { title: 'ورزشهای آبی', name: 'استخر سرپوشیده ', explain: 'در این سالن سعی شده انواع ورزش های آبی پوشش داده شود تا بسته به علاقه خود بتوانید از قسمت های مختلف این مجموعه استفاده کنید', dir: 'ltr',img:'./src/assets/hotel10.jpg',aosImg:'fade-right',aosTitle:'fade-left' },
  ])



  useEffect(() => {
    Aos.init({duration:2000})
  }, []);




  return (
    <>
      <div className="container structures-container" >
        {
          structuresInfo.map(structureInfo => (
            <div className="structures-boxes" dir={structureInfo.dir}>
              <div className="structures-img" data-aos={structureInfo.aosImg}>
                <img src={structureInfo.img} alt="" />
              </div>
              <div className="structures-introduction" data-aos={structureInfo.aosTitle}>
                <h5>{structureInfo.title}</h5>
                <h3>{structureInfo.name}</h3>
                <p>{structureInfo.explain}</p>
                <ButtonStyle>
                  <p>آشنایی بیشتر</p>
                </ButtonStyle>
              </div>
            </div>
          ))
        }


      </div>
    </>
  )
}

export default Structures