// import React from 'react'

import Header from "../header/header"
import SimpleLink from "../link&btn/simpleLink"

const ClientProducts = () => {
    return (
        <>
            <Header className ="bg-[#C7DDB5] w-full h-20 flex justify-between items-center pl-16 shadow-md shadow-black/20 fixed">
                <nav>
                    <div id="part1" className="flex flex-row items-center gap-5">
                        <button><img src="/svg/burger.svg" alt="" /></button>
                        <SimpleLink to="" className="bg-[#EDDD5E] flex items-center justify-center h-12 w-12 p-2 rounded-full"><img src="/svg/arrow.svg" alt="" /></SimpleLink>
                    </div>
                    <div id="part2" className="">

                    </div>
                    <div id="part3" className="">

                    </div>
                </nav>
            </Header>
            
        </>
    )
}

export  default ClientProducts