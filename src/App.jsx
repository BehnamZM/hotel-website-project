import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import routes from './routes'
import Footer from './Components/Footer/Footer'
import STTButton from './Components/STTButton/STTButton'

function App() {

  let router = useRoutes(routes)



  return (
    <div className="App">
      <Nav />
      <STTButton />
      {router}
      <Footer />
    </div>
  )
}

export default App
