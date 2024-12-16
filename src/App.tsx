//import { useState } from 'react'

import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import MiddleSection from "./components/middleSection/middleSection"


function App() {

  return (
      <>
      <Header className ="bg-white w-full h-20 flex justify-between items-center pl-20 shadow-md shadow-black/20 fixed"/>
      <MiddleSection/> 
      <Footer/>
      
      </>
  )
}

export default App
