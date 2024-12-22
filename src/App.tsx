//import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/Pages/landingPage"
import CreateAccount from "./components/Pages/createAccount"
import SignIn from "./components/Pages/signIn"

function App() {

  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage/>}/>
          </Route>
          <Route path="/signUp">
            <Route index element={<CreateAccount/>}/>
          </Route>
          <Route path="/signIn">
            <Route index element={<SignIn/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
      </>
  )
}

export default App
