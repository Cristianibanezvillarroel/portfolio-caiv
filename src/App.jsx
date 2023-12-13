import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { Proyects } from './pages/Proyects'
import { Contact } from './pages/Contact'


function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/proyects' element={<Proyects />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
