const MiddleSection = ()=>{

    return(
        <div id="heroSection" className="w-full h-[60rem] bg-[url('/images/threeCows.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-evenly items-center">
        <div id="bigDetail" className="w-[50rem] items-center">

        </div>
        <div id="btnSection" className="h-20 w-[40rem] flex flex-row items-center justify-center px-10 gap-5">
                    <div className="w-1/2 h-1/2 bg-[#EDDD5E] rounded-2xl p-3 flex justify-center items-center hover:bg-[#FFC107] hover:shadow-lg shadow-black">
                        <a href="#" className="md:text-sm lg:text-md text-black font-normal">Commander dès maintenant</a>
                    </div>
                    <div className="w-1/2 h-1/2 border-2 border-[#EDDD5E] rounded-2xl p-3 flex justify-center items-center hover:bg-[#FFC107] hover:shadow-lg shadow-black">
                        <a href="#" className="md:text-sm lg:text-md text-[#EDDD5E] font-normal">En savoir plus</a>
                    </div>

                </div>
    </div>
    )

}

export default MiddleSection