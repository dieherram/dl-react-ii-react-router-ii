import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import PokemonesProvider from './context/PokemonesContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonesProvider>
        <App />
      </PokemonesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
