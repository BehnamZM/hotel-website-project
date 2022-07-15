import Home from './Components/Home/Home'
import About from './Components/About/About'
import RoomsSuites from './Components/RoomsSuites/RoomsSuites'
import Resturant from './Components/Resturant/Resturant'
import NewsPage from './Components/NewsPage/NewsPage'
import Contact from './Components/Contact/Contact'
import MainRoom from './Components/MainRoom/MainRoom'
import NotFound from './Components/NotFound/NotFound'


let routes = [
  {path:'/',element:<Home />},
  {path:'/about',element:<About />},
  {path:'/rooms',element:<RoomsSuites />},
  {path:'/room/:roomTitle',element:<MainRoom />},
  {path:'/resturant',element:<Resturant />},
  {path:'/news',element:<NewsPage />},
  {path:'/contact',element:<Contact />},
  {path:'*',element:<NotFound />},
]

export default routes