import "./styles.css"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Context from "./context"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Favoritos from "./views/Favoritos"

const App = () => {
  const endpoint = "/fotos.json"
  const [photos, setPhotos] = useState([])
  const sharedStates = {photos, setPhotos}

  useEffect(() => {
    dataPhotos()
  }, [])

  const dataPhotos = async () => {
    const resPhotos = await fetch(endpoint)
    const dataPhotos = await resPhotos.json()
    setPhotos([...dataPhotos.photos])
  }

  return (
    <div className="App">
      <Context.Provider value={sharedStates}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App