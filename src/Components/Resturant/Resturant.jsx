import React ,{useState} from 'react'
import './Resturant.css'
import TabMenu from './TabMenu/TabMenu'
import Testmonials from '../Home/Testimonials/Testimonials'
import AboutResturant from './AboutResturant/AboutResturant'
import ImgHeader from '../ImgHeader/ImgHeader'

function Resturant() {

  const [headerInfo,setHeaderInfo] = useState({
    url:'url(./src/assets/resturant7.jpg)', title1:'تجربه ای خاص',title2:'رستوران کاپا'
   })


  return (
    <div>
      <ImgHeader {...headerInfo}/>
      <AboutResturant />
      <TabMenu />
      <Testmonials/>
    </div>
  )
}

export default Resturant