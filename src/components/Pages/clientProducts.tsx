// import React from 'react'
import Header from "../header/header"
import SimpleLink from "../link&btn/simpleLink"
import MiddleSection from "../middleSection/middleSection"
// import { Link } from "react-router-dom"
import TrueProduct from "../card/trueProduct"
import SideNav from "../sideNav/sideNav"
import { useState } from "react"

const ClientProducts = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Header className ="w-full h-20 bg-[#C7DDB5] shadow-md shadow-black/20 px-10">
                <nav className="w-full h-full flex flex-row justify-between items-center ">
                    <div id="part1" className="flex flex-row items-center gap-5">
                        <button onClick={toggleSideNav}><img src="/svg/burger.svg" alt="" /></button>
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
                <div id="content" className="w-full flex flex-row">
                    <SideNav className={`sidebar ${isOpen ? 'h-screen w-[20%] bg-[#3B4F3A] p-4 flex flex-col' : 'hidden'}`}/>
                    <div id="mainSection" className={`sidebar ${isOpen ? 'h-screen w-[80%]' : 'w-[100%]'}`}>
                        <div id="filter" className="w-full h-20 bg-black flex flex-row justify-center items-center gap-20">
                            <button className="text-[#EDDD5E] font-bold text-lg">Grand Bétail</button>
                            <button className="text-[#EDDD5E] font-bold text-lg">Petit bétail</button>
                            <button className="text-[#EDDD5E] font-bold text-lg">Volaille</button>
                        </div>
                        <div id="categories" className="w-full">
                        <section id="category" className="w-full px-4 py-8">
                            <h2 className="text-2xl text-[#404A3D] font-bold mb-6">Grand bétail</h2>
                            <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053667/groupMouton_lm1kgf.jpg" name="Mouton" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$" />
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053075/Goat_pgbaz1.jpg" name="Chèvre" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$"/>
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053424/pig_bhpjcl.jpg" name="Porc" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$" />
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735210671/laVache_fdvv9h.jpg" name="Vache" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$" />
                                
                            </div>    
                        </section>
                        <section id="category" className="w-full px-4 py-8">
                            <h2 className="text-2xl text-[#404A3D] text font-bold mb-6">Petit bétail</h2>
                            <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054700/cobaye1_zgdnik.jpg" name="Cobaye" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$" />
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Cobaye4_ilgcbu.jpg" name="Lapin" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$"/>
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054700/cobaye1_zgdnik.jpg" name="Cobaye" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$" />
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Cobaye4_ilgcbu.jpg" name="Lapin" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$"/>
                                
                            </div>    
                        </section>
                        <section id="category" className="w-full px-4 py-8">
                            <h2 className="text-2xl text-[#404A3D] font-bold mb-6">Volaille</h2>
                            <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/pondeuse1_mmb9cb.jpg" name="Poules" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$" />
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Canard1_ed7ag6.jpg" name="Canard" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$"/>
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Dindon1_xxqmc4.jpg" name="Dindon" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$" />
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735211090/pigeon_hv9tos.jpg" name="Pigeon" descript="lorem ipsum fhudhgr ehfej fdhfru gref hug" price="500$" />
                                
                            </div>    
                        </section>
                            {/* <div id="category" className="flex flex-col gap-10 px-10 py-5">
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
                            <div id="category" className="flex flex-col gap-10 px-10 py-5">
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
                            </div> */}
                        </div>
                        
                    </div>
                </div>
                
            </MiddleSection>
            
        </>
    )
}

export  default ClientProducts

