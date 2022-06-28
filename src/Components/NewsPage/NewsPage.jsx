import React,{useState} from 'react'
import './NewsPage.css'
import ImgHeader from '../ImgHeader/ImgHeader'
import Reservation from '../Home/Reservation/Reservation'
import Partners from '../Home/Partners/Partners'
import newsDatas from '../Home/News/newsData'
import NewsCard from '../Home/News/NewsCard/NewsCard'
function NewsPage() {
  const [newsPageInfos ,setNewsPageInfos] = useState(newsDatas)
  const [headerInfo,setHeaderInfo] = useState({
    url:'url(./src/assets/hotel5.jpg)', title1:'بلاگ هتل کاپا',title2:'اخبار ما'
   })
  return (
    <>
      <ImgHeader {...headerInfo} />
      <div className="news-part">
        <div className="container news-container">
          {
            newsPageInfos.map(newsInfo => (
              <NewsCard {...newsInfo} key={newsInfo.id}/>
            ))
          }
        </div>
      </div>
      <Reservation />
      <Partners />
    </>
  )
}

export default NewsPage