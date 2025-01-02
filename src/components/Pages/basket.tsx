import { useState } from "react"
import Header from "../header/header"
import SimpleLink from "../link&btn/simpleLink"
import MiddleSection from "../middleSection/middleSection"
import SideNav from "../sideNav/sideNav"
import ProductInBasket from "../card/productInBasket"
import { Link } from "react-router-dom"

const Basket = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    }
    return(
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
                <div id="content" className="w-full flex flex-row mt-20">
                    <SideNav className={`sidebar ${isOpen ? 'h-screen w-[20%] bg-[#3B4F3A] p-4 flex flex-col' : 'hidden'}`}/>
                    <div id="mainSection" className={`sidebar ${isOpen ? 'h-screen w-[70%] flex flex-col justify-center gap-20 px-20' : 'w-[100%] h-screen flex flex-col justify-center gap-20 px-20'}`}>
                        <div className="w-full flex justify-between">
                            <h2 className="text-2xl text-[#404A3D] font-bold">Panier</h2>
                            <div id='price' className="flex items-center gap-2">
                                <span className="text-gray-600">Prix total</span>
                                <span className="bg-[#404A3D] px-2 py-1 rounded text-white">500$</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <ProductInBasket name="Vache" image="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053424/pig_bhpjcl.jpg" weight="50" quantity={2} gender="Male" age="2" price="500 $"/>
                            <ProductInBasket name="Vache" image="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053424/pig_bhpjcl.jpg" weight="50" quantity={2} gender="Male" age="2" price="500 $"/>
                            <ProductInBasket name="Vache" image="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053424/pig_bhpjcl.jpg" weight="50" quantity={2} gender="Male" age="2" price="500 $"/>
                            <ProductInBasket name="Vache" image="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053424/pig_bhpjcl.jpg" weight="50" quantity={2} gender="Male" age="2" price="500 $"/>

                            <div id='btnSection' className='w-2/3 h-20 flex flex-row items-center justify-between px-20'>
                                <Link to={`/products`} className='bg-transparent w-auto h-12 text-[#658221] font-bold hover:cursor-pointer border-b-[3px] border-[#404A3D] hover:bg-[#9BA3AF] hover:shadow-lg shadow-black p-3'>Continuer le shopping</Link>
                                <Link to={``} className='bg-[#658221] w-auto h-12 rounded-md text-white font-semibold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black flex justify-center items-center p-2'>Passer au paiement</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MiddleSection>
        </>
    )
}
export default Basket