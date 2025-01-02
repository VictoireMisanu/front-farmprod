import { useState } from "react";
import Header from "../header/header";
import SimpleLink from "../link&btn/simpleLink";
import MiddleSection from "../middleSection/middleSection";
import SideNav from "../sideNav/sideNav";

const ProductDetails = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const [quantity, setQuantity] = useState(0)
    const [weight, setWeight] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => prev > 0 ? prev - 1 : 0)
  }

  const handleAddToCart = () => {
    // Handle add to cart logic here
    console.log({
      quantity,
      weight,
      gender,
      age
    })
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
                <div id="content" className="w-full flex flex-row">
                    <SideNav className={`sidebar ${isOpen ? 'h-screen w-[20%] bg-[#3B4F3A] p-4 flex flex-col' : 'hidden'}`}/>
                    <div id="mainSection" className={`sidebar ${isOpen ? 'h-screen w-[80%] flex flex-row justify-center gap-20 py-20' : 'w-[100%] h-screen flex flex-row justify-center gap-20 py-20'}`}>
                        <div id="productImage" className="w-[30%] h-[90%] ">
                            <img src="https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735053424/pig_bhpjcl.jpg" alt="" className="w-full h-full rounded-lg"/>
                        </div>
                        <div id="details" className="bg-[#d8e4d5] p-6 rounded-lg max-w-md h-[90%]">
                            <h2 className="text-2xl font-semibold text-[#4a4a4a] mb-4">Porc</h2>
      
                            <div className="inline-block border bg-[#5b8350] rounded px-3 py-1 mb-6">
                                <span className="text-[#F2EEEE] font-bold">100$/U</span>
                            </div>

                            <div className="mb-6">
                                <p className="text-[#4a4a4a] mb-2">Quantité</p>
                                <div className="flex items-center border border-[#4a4a4a] rounded w-32">
                                <button 
                                    onClick={decrementQuantity}
                                    className="px-3 py-1 text-[#4a4a4a] hover:bg-[#c1d1be] rounded-l"
                                >
                                    -
                                </button>
                                <span className="flex-1 text-center">{quantity}</span>
                                <button 
                                    onClick={incrementQuantity}
                                    className="px-3 py-1 text-[#4a4a4a] hover:bg-[#c1d1be] rounded-r"
                                >
                                    +
                                </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mb-6">
                                <input
                                type="text"
                                placeholder="Entrez le poids"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="border border-[#4a4a4a] rounded px-4 py-2 bg-transparent placeholder-[#4a4a4a]/70 outline-none focus-within:border-[#658221]"
                                />

                                <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="border border-[#4a4a4a] rounded px-4 py-2 bg-transparent text-[#4a4a4a] appearance-none"
                                >
                                <option value="">Choisissez le genre</option>
                                <option value="male">Mâle</option>
                                <option value="female">Femelle</option>
                                </select>

                                <select
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="border border-[#4a4a4a] rounded px-4 py-2 bg-transparent text-[#4a4a4a] appearance-none"
                                >
                                <option value="">Choisissez l'âge</option>
                                <option value="young">Jeune</option>
                                <option value="adult">Adulte</option>
                                <option value="senior">Senior</option>
                                </select>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-[#5b8350] hover:bg-[#4a6b41] text-white py-3 rounded flex items-center justify-center gap-2"
                            >
                                <span>Ajoutez au panier</span>
                                <svg 
                                className="w-5 h-5" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                                >
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>

                            <p className="mt-6 text-sm text-[#4a4a4a]">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                        </div>

                    </div>
                </div>
                
            </MiddleSection>
        </>
    )
}

export default ProductDetails