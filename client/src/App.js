import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import T9Converter from './components/T9Converter'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/t9' element={<T9Converter />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
