const MiddleSection = ()=>{

    return(
            <div>
                <div id="heroSection" className="w-full h-screen bg-[url('/images/threeCows.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-around px-44 pt-36">
                    <div id="text" className="w-[30rem] h-3/4 flex flex-col gap-20">
                        <div className="">
                            <div className="text-white text-xl">Bienvenue <span>chez</span></div>
                            <div className="text-3xl text-white">FarmProd</div>
                        </div>
                        <p className="text-['Libre_Baskerville'] text-5xl text-white leading-[60px]">Le choix idéal pour vos produits de champs et de ferme</p>
                    </div>
                    <div id="btnSection" className="lg:h-20 w-full flex flex-row items-center justify-center px-10 gap-5">
                                <div className="w-64 h-1/2 bg-[#EDDD5E] rounded-2xl p-3 flex justify-center items-center hover:bg-[#FFC107] hover:shadow-lg shadow-black">
                                    <a href="#" className="md:text-sm lg:text-md text-black font-bold">Commander dès maintenant</a>
                                </div>
                                <div className="w-1/4 h-1/2 border-2 border-[#EDDD5E] rounded-2xl p-3 flex justify-center items-center hover:bg-[#405500] hover:border-none hover:shadow-lg shadow-black">
                                    <a href="#" className="md:text-sm lg:text-md text-[#EDDD5E] font-normal">En savoir plus</a>
                                </div>
                    </div>
                </div>
                <div id="aboutSection" className="bg-[#C7DDB5] w-full h-[35rem] flex flex-col px-16 py-10">
                    <div id="title">
                        <p className="font-semibold text-[#5B8C51] text-2xl mb-2">A propos de nous</p>
                        <div className="flex flex-col gap-1 ">
                            <div className="w-44 h-1 bg-[#EDDD5E]"></div>
                            <div className="w-36 h-1 bg-[#EDDD5E]"></div>
                        </div>
                    </div>
                    <div id="content" className="flex flex-row py-20 w-full h-[30rem]">
                    <div id="image" className="w-2/3 h-full flex flex-col justify-center items-center p-20">
                        <div className="flex flex-row w-2/3 h-full gap-5">
                            <img src="/images/cheese.png" alt="" className="mt-5 w-56 h-[90%] rounded-tl-[4rem]"/>
                            <img src="/images/bee.png" alt="" className="mt-5 w-56 h-[90%]"/>
                        </div>
                        <div className="flex flex-row w-2/3 h-full gap-5 mt-5">
                            <img src="/images/honey.png" alt="" className="w-56 h-[90%]"/>
                            <img src="/images/2roosters.png" alt="" className="w-56 h-[90%]"/>
                        </div>
                    </div>
                    
                    <div id="text" className="w-2/3 h-full px-10 py-5 flex flex-col gap-10 border-l-[1px] border-black">
                        <div id="text">
                            <p className="font-sans font-normal leading-8 text-xl">Nous sommes une plateforme numérique qui offre un espace propice 
                                pour la vente et l’achat des produits de fermes et agricoles.
                            </p>
                        </div>
                        <div id="learnMore" className=" w-72 h-36">
                            <a href="#" className="rounded-xl p-3 h-1/3 w-40 text-md border-[#5B8C51] border-[3px] text-[#5B8C51] text-center font-normal shadow-lg shadow-black/50 flex items-center justify-center hover:bg-[#5B8C51] hover:text-white hover:border-none">En savoir plus</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="services" className="bg-white w-full h-[35rem] flex flex-col px-16 py-10">
                    <div id="title" className="mb-16">
                            <p className="font-semibold text-[#5B8C51] text-2xl mb-2">Services</p>
                            <div className="flex flex-col gap-1 ">
                                <div className="w-44 h-1 bg-[#EDDD5E]"></div>
                                <div className="w-36 h-1 bg-[#EDDD5E]"></div>
                            </div>
                    </div>
                    <div className="text-xl">Bénéficier des services tels que :</div>
                    <div id="content" className="flex flex-row items-center gap-56 py-20 w-auto h-96">
                        <div id="service1" className="h-56">
                            <div id="picture" className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white shadow-2xl border-none ml-10 shadow-black">
                                <img src="/images/Poule1.jpg" alt="" className="w-3/4 h-3/4  rounded-full flex items-center justify-center "/>
                            </div>
                            <div id="text" className="w-72 h-52 shadow-lg shadow-black/30 absolute -mt-10 pt-16 px-10 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Service de vente et/ou d'achat</p>
                                <p className="font-light text-md text-justify">Que vous soyez fermier ou acheteur, vendez et/ou acheter le produit de votre choix.</p>
                            </div>
                        </div>
                        <div id="service2" className="h-56">
                            <div id="picture" className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white shadow-2xl border-none ml-10 shadow-black">
                                <img src="/images/cow.png" alt="" className="w-3/4 h-3/4  rounded-full flex items-center justify-center "/>
                            </div>
                            <div id="text" className="w-72 h-52 shadow-lg shadow-black/30 absolute -mt-10 pt-16 px-10 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Canal de contact avec les Fermiers</p>
                                <p className="font-light text-md text-justify">En tant qu’acheteur, écrivez à votre fournisseur de produits agricoles ou de ferme.</p>
                            </div>
                        </div>
                        <div id="service3" className="h-56">
                            <div id="picture" className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white shadow-2xl border-none ml-10 shadow-black">
                                <img src="/images/pouletBlanc.jpg" alt="" className="w-3/4 h-3/4  rounded-full flex items-center justify-center "/>
                            </div>
                            <div id="text" className="w-72 h-52 shadow-lg shadow-black/30 absolute -mt-10 pt-16 px-10 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Information</p>
                                <p className="font-light text-md text-justify">Vous permettre de rester informé lorsque vos fourisseurs publient des noveaux produits.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="product" className="bg-[#F2EEEE] w-full h-[35rem] flex flex-col justify-evenly px-16 py-10 gap-10">
                    <div id="title" className="">
                            <p className="font-semibold text-[#5B8C51] text-2xl mb-2">Produits</p>
                            <div className="flex flex-col gap-1 ">
                                <div className="w-44 h-1 bg-[#EDDD5E]"></div>
                                <div className="w-36 h-1 bg-[#EDDD5E]"></div>
                            </div>
                    </div>
                    <div id="content" className="flex flex-row items-center gap-10 py-20 w-auto h-96">
                        <div id="product1" className="h-[23rem] w-2/4 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col items-center gap-5">
                            <div id="part1" className="w-full h-3/5 rounded-sm flex items-center justify-center">
                                <img src="/images/Poule1.jpg" alt="" className="w-full h-full  rounded-sm flex items-center justify-center "/>
                            </div>
                            <div id="part2" className="flex flex-col gap-5 h-1/4">
                                <p id="productName" className="text-md text-[#404A3D] font-semibold">Volaille</p>
                                <div id="buy" className=" w-auto">
                                    <a href="#" className="rounded-xl text-md bg-[#404A3D] text-[#FFC107] text-center font-normal  flex items-center justify-center hover:bg-[#5B8C51] hover:text-white hover:border-none">Commander</a>
                                </div>
                            </div>
                        </div>
                    
                        <div id="product1" className="h-[23rem] w-2/4 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col items-center gap-5">
                            <div id="part1" className="w-full h-3/5 rounded-sm flex items-center justify-center">
                                <img src="/images/Poule1.jpg" alt="" className="w-full h-full  rounded-sm flex items-center justify-center "/>
                            </div>
                            <div id="part2" className="flex flex-col gap-5 h-1/4">
                                <p id="productName" className="text-md text-[#404A3D] font-semibold">Volaille</p>
                                <div id="buy" className=" w-auto">
                                    <a href="#" className="rounded-xl text-md bg-[#404A3D] text-[#FFC107] text-center font-normal  flex items-center justify-center hover:bg-[#5B8C51] hover:text-white hover:border-none">Commander</a>
                                </div>
                            </div>
                        </div>
                        <div id="product1" className="h-[23rem] w-2/4 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col items-center gap-5">
                            <div id="part1" className="w-full h-3/5 rounded-sm flex items-center justify-center">
                                <img src="/images/Poule1.jpg" alt="" className="w-full h-full  rounded-sm flex items-center justify-center "/>
                            </div>
                            <div id="part2" className="flex flex-col gap-5 h-1/4">
                                <p id="productName" className="text-md text-[#404A3D] font-semibold">Volaille</p>
                                <div id="buy" className=" w-auto">
                                    <a href="#" className="rounded-xl text-md bg-[#404A3D] text-[#FFC107] text-center font-normal  flex items-center justify-center hover:bg-[#5B8C51] hover:text-white hover:border-none">Commander</a>
                                </div>
                            </div>
                        </div>
                        <div id="product1" className="h-[23rem] w-2/4 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col items-center gap-5">
                            <div id="part1" className="w-full h-3/5 rounded-sm flex items-center justify-center">
                                <img src="/images/Poule1.jpg" alt="" className="w-full h-full  rounded-sm flex items-center justify-center "/>
                            </div>
                            <div id="part2" className="flex flex-col gap-5 h-1/4">
                                <p id="productName" className="text-md text-[#404A3D] font-semibold">Volaille</p>
                                <div id="buy" className=" w-auto">
                                    <a href="#" className="rounded-xl text-md bg-[#404A3D] text-[#FFC107] text-center font-normal  flex items-center justify-center hover:bg-[#5B8C51] hover:text-white hover:border-none">Commander</a>
                                </div>
                            </div>
                        </div>
            

                    </div>
                    <div id="sectionbtn">
                        <div id="learnMore" className=" w-72 flex gap-2 items-center">
                            <a href="#" className="rounded-xl bg-[#404A3D] p-3 w-56 text-md text-[#FFC107] text-center font-normal shadow-lg shadow-black/50">En savoir plus</a>
                            <a href="#" className="rounded-full border-2 border-[#5B8C51] w-10 h-10 text-[#5B8C51] shadow-lg shadow-black/50 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"/></svg></a>
                        </div>
                    </div>
                </div>
                
            </div>
    )

}

export default MiddleSection