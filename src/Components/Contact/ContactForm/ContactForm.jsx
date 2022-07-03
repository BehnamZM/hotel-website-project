import React, { useState } from 'react'
import ReservePhone from '../../ReservePhone/ReservePhone'
import ButtonStyle from '../../ButtonStyle/ButtonStyle'
import StarBox from '../../StarBox/StarBox'
import axios from 'axios'
import './ContactForm.css'
import swal from 'sweetalert'

function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [des, setDes] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    try {
      const res = axios.post('https://hotel-website-project-default-rtdb.firebaseio.com/messages.json', {
        name, email, phone, subject, des
      })
      console.log(res)
      swal("تشکر از شما", "پیام با موفقیت ارسال شد!", "success");
    }
    catch (err) {
      swal("متاسفیم", `${err.message}`, "error")
    }

  }
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
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className='contact-input'
              placeholder='نام شما *'
              onChange={(e) => setName(e.target.value)}
              pattern='{!}'
              required />
            <input
              type="email"
              className='contact-input'
              placeholder='ایمیل شما *'
              onChange={(e) => setEmail(e.target.value)}
              pattern='{!}'
              required />
            <input
              type="text"
              className='contact-input'
              placeholder='تلفن همراه *'
              onChange={(e) => setPhone(e.target.value)}
              pattern='{!}'
              required />
            <input type="text"
              className='contact-input'
              placeholder='موضوع *'
              onChange={(e) => setSubject(e.target.value)}
              pattern='{!}'
              required />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className='contact-input'
              placeholder='پیام شما *'
              onChange={(e) => setDes(e.target.value)}
              required>
            </textarea>
            <ButtonStyle><p>ارسال پیام</p></ButtonStyle>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm