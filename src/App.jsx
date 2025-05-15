import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Form from './pages/Form.jsx'
import Data from './pages/Data.jsx'
import NotFound from './pages/404.jsx'

function App() {
  const [state, setState] = useState("Daffa")

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={< Contact />} />
          <Route path='form' element={< Form />} />
          <Route path='data' element={< Data />} />
          <Route path='*' element={< NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
