// import React from 'react'

import Footer from "../footer/footer"
import Header from "../header/header"
import MiddleSection from "../middleSection/middleSection"

const LandingPage = () => {
    return (
        <>
            <Header className ="bg-white w-full h-20 flex justify-between items-center pl-16 shadow-md shadow-black/20 fixed"/>
            <MiddleSection/> 
            <Footer/>
        </>
    )
}

export default LandingPage