import { Route, Routes } from "react-router-dom"
import Home from "./assets/Pages/Home"
import Favourite from "./assets/Pages/Favourite"
import NavBar from "./assets/Components/NavBar"
import "../src/css/App.css"

  function App() {


  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
