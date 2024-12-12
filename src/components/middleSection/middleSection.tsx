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
                <div id="aboutSection" className="bg-[#C7DDB5]">
                    <div id="image" className="w-2/3 h-full flex flex-col justify-center items-center p-20">
                        <div className="flex flex-row w-2/3 h-full gap-3">
                            <img src="/images/drepreduit.jpg" alt="" className="mt-5 w-32 h-[80%] rounded-tl-[4rem]"/>
                            <img src="/images/enfantdre2.png" alt="" className="mt-5 w-40 h-[80%]"/>
                        </div>
                        <div className="flex flex-row w-2/3 h-full gap-5">
                            <img src="/images/enfantdrep3.png" alt="" className="w-44 h-[80%]"/>
                            <img src="/images/enfantdrep4.png" alt="" className="w-44 h-[80%]"/>
                        </div>
                    </div>
                    <div id="text">

                    </div>
                </div>
            </div>
    )

}

export default MiddleSection