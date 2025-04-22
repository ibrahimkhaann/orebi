
import './App.css'

import React from 'react'
import RootLayouts from './layouts/RootLayouts'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {  Routes,Route, } from 'react-router-dom'
import Shop from './pages/Shop'
import About from './pages/About'




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path='shop' element={<Shop/>}/>
          <Route path='about' element={<About/>}/>

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
