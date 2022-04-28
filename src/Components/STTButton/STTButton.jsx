import React, { useState, useEffect } from 'react'
import './STTButton.css'
import { IoIosArrowUp } from 'react-icons/io'
import Aos from 'aos'
import 'aos/dist/aos.css'
function STTButton() {

  const [buttonShow, setButtonShow] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [setButtonShow])



  const showBtn = () => {
    let scrollOfTop = document.documentElement.scrollTop;
    if (scrollOfTop > 400) {
      setButtonShow(true)
    } else {
      setButtonShow(false)
    }

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let calcScroll = Math.round((scrollOfTop * 100) / calcHeight)
  }



  const toTopHandler = () => {
    document.documentElement.scrollTop = 0;
  }



  window.addEventListener('scroll', showBtn)


  return (
    <>
      <div
        className={buttonShow ? 'scroll-to-top showbtn' : 'scroll-to-top'}
        data-aos="fade-up"
        onClick={() => toTopHandler()}
      >
        <div className="sttbtn">
          <IoIosArrowUp className='stticon' />
        </div>
      </div>
    </>
  )
}

export default STTButton