
import './App.css'

import React from 'react'
import RootLayouts from './layouts/RootLayouts'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {  Routes,Route, } from 'react-router-dom'





const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
