
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './header/NavBar'
import MarqueeText from './MarqueeText'
import Login from './Login'

export default function App() {


  return (
    <>

      <div>
        <BrowserRouter>
            <Routes>
              <Route path='' element={<NavBar/>}/>
              <Route path='/' element={<NavBar/>}/>
              <Route path='/marquee1' element={<MarqueeText text="Hi" direction="up"/>}/>
              <Route path='/marquee2' element={<MarqueeText text="Welcome to DSI" direction="right"/>}/>
              <Route path='/login' element={<Login/>}/>


            </Routes>
        </BrowserRouter>
        

      </div>
  
    </>
  )
}


