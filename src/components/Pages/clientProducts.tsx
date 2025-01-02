// import React from 'react'
import Header from "../header/header"
import SimpleLink from "../link&btn/simpleLink"
import MiddleSection from "../middleSection/middleSection"
// import { Link } from "react-router-dom"
import TrueProduct from "../card/trueProduct"
import SideNav from "../sideNav/sideNav"
import { useEffect, useState } from "react"
import { getProducts } from '../services/api';
import { productProps } from "../card/trueProduct"


const ClientProducts = () => {
 
    const [isOpen, setIsOpen] = useState(false)
    const [products, setProducts] = useState<productProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const dataProduct = await getProducts();
            setProducts(dataProduct);
            setLoading(false);

            
        } catch (err: unknown) {
            const errorMessage = err instanceof Error 
              ? `Erreur lors du chargement des produits: ${err.message}`
              : 'Erreur lors du chargement des produits';
            setError(errorMessage);
            setLoading(false);
          }
        };

        fetchProducts();
    }, []);
    console.log(products);
    
    const Category1 = products.filter((produit) => produit.category === 1)
    const Category2 = products.filter((produit) => produit.category === 2)
    const Category3 = products.filter((produit) => produit.category === 3)
    if (loading) return <div className="text-center">Chargement...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    
    
    
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
                            {Category1.map((product:productProps)=>(
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src={product.src} name={product.name} descript={product.descript} price={`${product.price} $`}/>
                            ))}
                            </div>    
                        </section>
                        <section id="category" className="w-full px-4 py-8">
                            <h2 className="text-2xl text-[#404A3D] font-bold mb-6">Petit bétail</h2>
                            <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Category2.map((product:productProps)=>(
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src={product.src} name={product.name} descript={product.descript} price={product.price}/>
                            ))}
                            </div>    
                        </section>
                        <section id="category" className="w-full px-4 py-8">
                            <h2 className="text-2xl text-[#404A3D] font-bold mb-6">Volaille</h2>
                            <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Category3.map((product:productProps)=>(
                                <TrueProduct to="#" className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col" src={product.src} name={product.name} descript={product.descript} price={product.price}/>
                            ))}
                            </div>    
                        </section>
                        {/* <div>{JSON.stringify(products)}</div> */}

                        </div>
                        
                    </div>
                </div>
                
            </MiddleSection>
            
        </>
    )
}

export  default ClientProducts


