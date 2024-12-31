// import React from 'react'

import Logo from "../logo/logo"

const footer = () => {
    return(
        <div className="w-full h-[443px] px-20 py-[57px] bg-[#404A3D] flex flex-col-reverse justify-center items-center gap-10">
            <div id="part2" className="w-full self-stretch text-center text-[#EDDD5E] text-xs font-bold font-['Libre Baskerville'] border-t-[1px] border-[#EDDD5E] pt-10">Copyright © 2024 | FarmProd</div>

            <div id="part1" className="w-full flex flex-row justify-evenly items-center">
                <div id="logo" className="w-60 h-3/4 flex flex-col justify-center items-center  py-5 gap-5">
                    <Logo className="text-4xl text-[#EDDD5E] font-bold font-['Titan One']"/>
                    <div id="socialMedia" className="flex flex-row gap-5">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#EDDD5E] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#404A3D" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#EDDD5E] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#404A3D" fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z" clip-rule="evenodd"/></svg></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#EDDD5E] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#404A3D" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#EDDD5E] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4" cy="4" r="2" fill="#404A3D" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1"/></circle><g fill="none" stroke="#404A3D" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0"/></path></g></svg></a>

                    </div>
                </div>

                <div id="page" className="w-1/5 h-full px-14 py-8 flex flex-col justify-center items-center gap-5">
                    <div id="title" className="self-stretch text-[#FFC107] text-xl font-extrabold font-['Roboto Serif'] text-center">Pages</div>
                        <div id="content" className="w-full flex flex-col justify-center items-center gap-3">
                            <a id="produit" href="#" className="">
                                            <div className="flex flex-row items-center gap-3">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                                <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Produits</div>
                                            </div>
                            </a>
                            <a id="fermier" href="#">
                                            <div className="flex flex-row items-center gap-3">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                                <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Fermiers</div>
                                            </div>
                            </a>
                            <a id="astuce" href="#">
                                            <div className="flex flex-row items-center gap-3">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                                <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Astuces</div>
                                            </div>
                            </a>
                        </div>
                </div>
                <div id="region" className="w-1/5 h-full px-14 py-8 flex flex-col gap-5">
                    <div id="title" className="self-stretch text-[#FFC107] text-xl font-extrabold font-['Roboto Serif'] text-center">Region</div>
                        <div id="content" className="w-full flex flex-col justify-center items-center gap-3">
                            <a id="nord" href="#">
                                            <div className="flex flex-row items-center gap-3">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                                <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Nord</div>
                                            </div>
                            </a>
                                        
                            <a id="sud" href="#">
                                <div className="flex flex-row items-center gap-3">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Sud</div>
                                </div>
                            </a>
                            <a id="centre" href="#">
                                <div className="flex flex-row items-center gap-3">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Centre</div>
                                </div>
                            </a>
                            <a id="est" href="#">
                                <div className="flex flex-row items-center gap-3">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Est</div>
                                </div>
                            </a>
                            <a id="ouest" href="#">
                                <div className="flex flex-row items-center gap-3">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FEF3B8" stroke-linecap="round" stroke-linejoin="round" d="m10 17l5-5l-5-5"/></svg></span>
                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">Ouest</div>
                                </div>
                            </a>
                                        
                        </div>
                </div>
                <div id="contact" className="w-1/5 h-full px-14 py-8 flex flex-col gap-5">
                    <div id="title" className="self-stretch text-[#FFC107] text-xl font-extrabold font-['Roboto Serif'] text-center">Contact</div>
                        <div id="content" className="w-full flex flex-col justify-center items-center gap-3">
                            <a id="phone" href="#">
                                            <div className="flex flex-row items-center gap-3">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg></span>
                                                <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">+2438 2505 7845</div>
                                            </div>
                            </a>
                                        
                            <a id="email" href="#">
                                <div className="flex flex-row items-center gap-3">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg></span>
                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">contact.farmprod@gmail.com</div>
                                </div>
                            </a>
                            <a id="whatsapp" href="#">
                                <div className="flex flex-row items-center gap-3">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg></span>
                                    <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">+2438 2505 7845</div>
                                </div>
                            </a>
                                        
                        </div>
                </div>

                
                
            </div>
    </div>
    )
}
export default footer