import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Signup from './pages/Signup'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Netflix />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/player" element={<Player />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
