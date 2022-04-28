import React from 'react'
import ReservePhone from '../../ReservePhone/ReservePhone'
import ButtonStyle from '../../ButtonStyle/ButtonStyle'
import StarBox from '../../StarBox/StarBox'
import './ContactForm.css'

function ContactForm() {
  return (
    <>
      <div className="contact-main-part container">
        <div className="contact-ways">
          <StarBox />
          <h3>هتل بینظیر و لوکس کاپا</h3>
          <p>همکاران ما در هتل کاپا در هر ساعت از شبانه روز آماده اند تا در صورت نیاز به سوالات شما عزیزان پاسخ دهند تا با خیال راحت بتوانید انتخابی در خور شأن خود داشته باشید.برای ارتباط باما راه های مختلفی وجود دارد که میتوانید از آنها بهره ببرید.</p>
          <ReservePhone />

        </div>
        <div className="contact-form">
          <form action="">
            <input type="text" className='contact-input' placeholder='نام شما *'/>
            <input type="email" className='contact-input' placeholder='ایمیل شما *'/>
            <input type="number" className='contact-input' placeholder='تلفن همراه *'/>
            <input type="text" className='contact-input' placeholder='موضوع *'/>
            <textarea name="" id="" cols="30" rows="5" className='contact-input' placeholder='پیام شما *'></textarea>
            <ButtonStyle><p>ارسال پیام</p></ButtonStyle>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm