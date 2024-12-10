import Logo from "../logo/logo"

interface headerProps{

    className : string
}



const Header = ({className}:headerProps) => {
    return(
        <div className={className}>
            <Logo/>
                <div id="navElement" className="w-42 h-full flex flex-row items-center justify-center px-10 gap-12">
                    <a href="#" className="text-md text-[#5B8C51] font-normal">Acceuil</a>
                    <a href="#" className="text-md text-black  font-normal hover:text-[#5B8C51]">A propos</a>
                    <a href="#" className="text-md text-black  font-normal hover:text-[#5B8C51]">Produits</a>
                    <a href="#" className="text-md text-black  font-normal hover:text-[#5B8C51]">Fermiers</a>
                     
                </div>
                <div id="btnSection" className="h-full w-[22rem] flex flex-row items-center justify-center px-10 gap-5">
                    <div className="w-1/2 h-1/2 bg-[#EDDD5E] rounded-2xl p-3 flex justify-center items-center hover:bg-[#FFC107]">
                        <a href="#" className="md:text-sm lg:text-md text-black font-normal">Commander</a>
                    </div>

                </div>
        </div>
    )
}

export default Header