//import './App.css'

import NavBar from "./header/NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom"

export default function App() {
  

  return (
    <>
      <NavBar/>
      

      <div>
          <BrowserRouter>
              <Routes>
                      <Route path="" element={<>}
              </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}


