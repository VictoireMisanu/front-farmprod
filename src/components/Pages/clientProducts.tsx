// import React from 'react'

import Header from "../header/header"
import SimpleLink from "../link&btn/simpleLink"
import MiddleSection from "../middleSection/middleSection"

const ClientProducts = () => {
    return (
        <>
            <Header className ="w-full h-20 bg-[#C7DDB5] shadow-md shadow-black/20 px-10 z-10">
                <nav className="w-full h-full flex flex-row justify-between items-center ">
                    <div id="part1" className="flex flex-row items-center gap-5">
                        <button><img src="/svg/burger.svg" alt="" /></button>
                        <SimpleLink to="" className="bg-[#EDDD5E] flex items-center justify-center h-12 w-12 p-2 rounded-full"><img src="/svg/arrow.svg" alt="" /></SimpleLink>
                    </div>
                    <div id="part2" className="bg-white w-auto h-1/2 shadow-lg shadow-black/20 rounded-xl flex flex-row justify-between items-center px-2">
                        <label htmlFor="search"><img src="/svg/search.svg" alt="" className="w-7 h-7"/></label>
                        <input type="search" name="searchInput" id="search" className="w-2/3 outline-none" placeholder="Rechercher"/>
                    </div>
                    <div id="part3" className="flex flex-row items-center gap-5">
                        <SimpleLink to="" className="flex items-center justify-center pr-5 border-black border-r-[1px]"><img src="/svg/basket.svg" alt="" className="w-10 h-10"/></SimpleLink>
                        <SimpleLink to="" className="flex items-center justify-center "><img src="/svg/user.svg" alt="" className="w-10 h-10"/></SimpleLink>
                    </div>
                </nav>
            </Header>
            
            <MiddleSection>
                <div id="filter" className="w-fill h-20 bg-black flex flex-row justify-center items-center gap-20">
                    <button className="text-[#EDDD5E] font-bold text-lg">Grand Bétail</button>
                    <button className="text-[#EDDD5E] font-bold text-lg">Petit bétail</button>
                    <button className="text-[#EDDD5E] font-bold text-lg">Volaille</button>
                </div>
               
                
            </MiddleSection>
            
        </>
    )
}

export  default ClientProducts