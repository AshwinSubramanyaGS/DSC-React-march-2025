//import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './header/NavBar'
import MarqueeText from './MarqueeText'
import NewComponent from './NewComponent'
export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='' element={<NavBar/>} />
              <Route path='/marquee' element={<MarqueeText text="Hello word" direction="right"/>} />
              <Route path='/newcomponent' element={<NewComponent/>} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}


