// import React from 'react'

import { Link } from "react-router-dom"
import Header from "../header/header"
import SimpleLink from "../link&btn/simpleLink"
import MiddleSection from "../middleSection/middleSection"
import TrueProduct from "../card/trueProduct"

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
                <div id="products" className="flex flex-col gap-10 px-10 py-5">
                    <div id="title" className="text-[#1D2E28] font-bold text-2xl">Grand bétail</div>
                    <div id="content" className=" w-full h-auto flex flex-row gap-5 items-center justify-center">
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735044661/CowAlone_tnlnfb.png" name="Vache" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053075/Goat_pgbaz1.jpg" name="Chèvre" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053527/groupPig_wvztn6.jpg" name="Porc" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053667/groupMouton_lm1kgf.jpg" name="Mouton" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        
                    </div>
                </div>
                <div id="products" className="flex flex-col gap-10 px-10 py-5">
                    <div id="title" className="text-[#1D2E28] font-bold text-2xl">Petit bétail</div>
                    <div id="content" className=" w-full h-auto flex flex-row gap-5 items-center justify-center">
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Cobaye4_ilgcbu.jpg" name="Lapin" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Cobaye4_ilgcbu.jpg" name="Cobaye" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Cobaye4_ilgcbu.jpg" name="Cobaye min." price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Cobaye4_ilgcbu.jpg" name="Mouton" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        
                    </div>
                </div>
                <div id="products" className="flex flex-col gap-10 px-10 py-5">
                    <div id="title" className="text-[#1D2E28] font-bold text-2xl">Volaille</div>
                    <div id="content" className=" w-full h-auto flex flex-row gap-5 items-center justify-center">
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/pondeuse1_mmb9cb.jpg" name="Poule" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Canard1_ed7ag6.jpg" name="Canard" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Dindon1_xxqmc4.jpg" name="Dindon" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        <Link id="product1" to="#">
                            <TrueProduct className="w-72 h-auto flex flex-col rounded-lg" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Poussin1_dzvxsj.jpg" name="Poussin" price='500$' descript="lorem ipsum fhudhgrehfeijfdhfrugrefhughfygdfruhgr"/>
                        </Link>
                        
                    </div>
                </div>
                
            </MiddleSection>
            
        </>
    )
}

export  default ClientProducts