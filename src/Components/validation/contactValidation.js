import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({
  name: Yup.string("نام معتبر نمیباشد !").required("نام الزامی میباشد !"),
  email: Yup.string("").email("ایمیل معتبر نمباشد !").required("ایمیل الزامی میباشد !"),
  phone: Yup.number("شماره تماس معتبر نمیباشد !").required("شماره تماس الزامی میباشد !"),
  subject: Yup.string("موضوع پیام معتبر نمیباشد !").required("موضوع پیام الزامی میباشد !"),
  des: Yup.string("پیام شما معتبر نمیباشد !").required("توضیحات الزامی میباشد !")
})