//import { useState } from 'react'

import {Route, Routes } from "react-router-dom"
import LandingPage from "./components/Pages/landingPage"
import CreateAccount from "./components/Pages/createAccount"
import SignIn from "./components/Pages/signIn"
import ClientProducts from "./components/Pages/clientProducts"
import CreateFarm from "./components/Pages/createFarm"
import SignInFarm from "./components/Pages/signInFarm"
import ProductDetails from "./components/Pages/productDetails"
import Basket from "./components/Pages/basket"

function App() {

  return (
      <>
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
          <Route path="/productDetails" element={
            <ProductDetails/>} />
            <Route path="/basket" element={
            <Basket/>} />
            <Route path="/createFarm">
            <Route index element={<CreateFarm/>}/>
          </Route>
          <Route path="/signInFarm">
            <Route index element={<SignInFarm/>}/>
          </Route>
        </Routes>
      
      </>
  )
}

export default App
