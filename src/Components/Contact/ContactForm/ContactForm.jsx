import React from 'react'
import ReservePhone from '../../ReservePhone/ReservePhone'
import ButtonStyle from '../../ButtonStyle/ButtonStyle'
import StarBox from '../../StarBox/StarBox'
import axios from 'axios'
import './ContactForm.css'
import swal from 'sweetalert'
import { contactSchema } from '../../validation/contactValidation'
import { Formik, ErrorMessage, Form, Field } from 'formik'

function ContactForm() {
  const submitHandler = (values) => {
    try {
      const res = axios.post('https://hotel-website-project-default-rtdb.firebaseio.com/messages.json', values)
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
          <Formik initialValues={{
            name: '',
            email: '',
            phone: '',
            subject: '',
            des: '',
          }}
            validationSchema={contactSchema}
            onSubmit={(values) => {
              submitHandler(values);
            }}>
            <Form>
              <Field
                name='name'
                type="text"
                className='contact-input'
                placeholder='نام شما *' />
              <ErrorMessage
                name="name"
                render={(msg) => (
                  <div className="error-input">{msg}</div>
                )} />
              <Field
                name='email'
                className='contact-input'
                placeholder='ایمیل شما *' />
              <ErrorMessage
                name="email"
                render={(msg) => (
                  <div className="error-input">{msg}</div>
                )} />
              <Field
                name='phone'
                type="number"
                className='contact-input'
                placeholder='تلفن همراه *' />
              <ErrorMessage
                name="phone"
                render={(msg) => (
                  <div className="error-input">{msg}</div>
                )} />
              <Field
                name='subject'
                type="text"
                className='contact-input'
                placeholder='موضوع *' />
              <ErrorMessage
                name="subject"
                render={(msg) => (
                  <div className="error-input">{msg}</div>
                )} />
              <Field
                type="text"
                as="textarea"
                name="des"
                id=""
                cols="30"
                rows="5"
                className='contact-input'
                placeholder='پیام شما *'>
              </Field>
              <ErrorMessage
                name="des"
                render={(msg) => (
                  <div className="error-input">{msg}</div>
                )} />
              <ButtonStyle>
                <p
                  type="submit">ارسال پیام</p>
              </ButtonStyle>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default ContactForm