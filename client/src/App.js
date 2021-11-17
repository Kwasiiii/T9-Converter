import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Home from './components/Home/Home'
import T9Converter from './components/T9Converter'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/t9' element={<T9Converter />}>
        </Route>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
