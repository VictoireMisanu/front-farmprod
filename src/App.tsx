//import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/Pages/landingPage"
import RegisterForm from "./components/Pages/form1"

function App() {

  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage/>}/>
          </Route>
          <Route path="/signUp">
            <Route index element={<RegisterForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
      </>
  )
}

export default App
