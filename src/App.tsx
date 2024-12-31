//import { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/Pages/landingPage"
import CreateAccount from "./components/Pages/createAccount"
import SignIn from "./components/Pages/signIn"
import ClientProducts from "./components/Pages/clientProducts"
import CreateFarm from "./components/Pages/createFarm"

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
          <Route path="/products">
            <Route index element={<ClientProducts/>}/>
          </Route>
          <Route path="/createFarm">
            <Route index element={<CreateFarm/>}/>
          </Route>
          <Route path="/logInFarm">
            <Route index element={<CreateFarm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
      </>
  )
}

export default App
