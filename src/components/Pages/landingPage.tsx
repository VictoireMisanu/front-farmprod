// import React from 'react'

import Footer from "../footer/footer"
import Header from "../header/header"
import { BtnIcon } from "../link&btn/btnIcon"
import SimpleLink from "../link&btn/simpleLink"
import Logo from "../logo/logo"
import MiddleSection from "../middleSection/middleSection"

const LandingPage = () => {
    return (
        <>
            <Header className ="bg-white w-full h-20 flex justify-between items-center pl-16 shadow-md shadow-black/20 fixed">
                <Logo className="text-4xl text-[#404A3D] font-bold font-['Titan One']"/>
                <nav id="navElement" className="w-42 h-full flex flex-row items-center justify-center px-10 gap-12">
                        <SimpleLink to={`/signUp`} className="text-md text-[#5B8C51] p-2 rounded-lg hover:bg-[#FEF3B8] font-normal" children='Acceuil'/>
                        <SimpleLink to={`/signUp`} className="text-md text-black  font-normal bg-none p-2 rounded-lg hover:bg-[#FEF3B8] hover:text-[#5B8C51]" children='A propos'/>
                        <SimpleLink to={`/products`} className="text-md text-black  font-normal bg-none p-2 rounded-lg hover:bg-[#FEF3B8] hover:text-[#5B8C51]" children='Produits'/>
                        <SimpleLink to={`/signUp`} className="text-md text-black  font-normal bg-none p-2 rounded-lg hover:bg-[#FEF3B8] hover:text-[#5B8C51]" children='Fermiers'/>
                </nav   >
                <div id="btnSection" className="h-full w-[22rem] flex flex-row items-center justify-center px-10 gap-5">
                        <BtnIcon to={`/products`} className="w-2/3 h-1/2 bg-[#EDDD5E] rounded-2xl p-3 flex flex-row justify-around items-center hover:bg-[#FFC107] hover:shadow-lg shadow-black lg:md:text-md text-black font-semibold">
                            <span>Commander</span>
                            <img src="/svg/basket.svg" alt="" />
                        </BtnIcon>
                        

                </div>
            </Header>
            <MiddleSection/> 
            <Footer/>
        </>
    )
}

export default LandingPage