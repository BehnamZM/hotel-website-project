import Home from './Components/Home/Home'
import About from './Components/About/About'
import RoomsSuites from './Components/RoomsSuites/RoomsSuites'
import Resturant from './Components/Resturant/Resturant'
import SPA from './Components/SPA/SPA'
import Gallery from './Components/Gallery/Gallery'
import NewsPage from './Components/NewsPage/NewsPage'
import Contact from './Components/Contact/Contact'


let routes = [
  {path:'/',element:<Home />},
  {path:'/about',element:<About />},
  {path:'/rooms',element:<RoomsSuites />},
  {path:'/resturant',element:<Resturant />},
  {path:'/spa',element:<SPA />},
  {path:'/gallery',element:<Gallery />},
  {path:'/news',element:<NewsPage />},
  {path:'/contact',element:<Contact />},
]

export default routes