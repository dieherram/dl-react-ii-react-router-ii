import './App.css'

import { Route, Routes } from "react-router-dom"

import NavMenu from './components/NavMenu'

import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Pokemon from './views/Pokemon'
import NotFound from './views/NotFound'

function App() {

  return (
    <div>
      <NavMenu />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemones"
          element={<Pokemones />}
        />
        <Route
          path="/pokemones/:id"
          element={<Pokemon />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

export default App
