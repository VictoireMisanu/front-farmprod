
import Header from "../header/header"
import SimpleLink from "../link&btn/simpleLink"
import MiddleSection from "../middleSection/middleSection"
import TrueProduct from "../card/trueProduct"
import SideNav from "../sideNav/sideNav"
import { useEffect, useState } from "react"
import { getProducts } from '../services/api';
import { useNavigate } from "react-router-dom"
import useStore from "../../store/zustand"
import { productProps } from "../card/product"

const ClientProducts = () => {
    const navigate = useNavigate();
    const {data} = useStore()
    
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
    if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#404A3D]"></div></div>;
    if (error) return <div className="min-h-screen flex items-center justify-center"><div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{error}</div></div>;
    
    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    const users = JSON.parse(localStorage.getItem('user_info') || '{}');
    console.log(users)
    
    const handleDeconnection = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_info');
        navigate('/');
    }
    return (
        <>
            <Header className="w-full h-20 bg-[#C7DDB5] shadow-md shadow-black/20 px-4 md:px-10 z-30">
                <nav className="w-full h-full flex flex-row justify-between items-center">
                    <div id="part1" className="flex flex-row items-center gap-2 md:gap-5">
                        <button onClick={toggleSideNav} className="p-2 hover:bg-[#EDDD5E]/20 rounded-lg transition-colors">
                            <img src="/svg/burger.svg" alt="" className="w-6 h-6" />
                        </button>
                        <SimpleLink to="" className="bg-[#EDDD5E] flex items-center justify-center h-10 w-10 md:h-12 md:w-12 p-2 rounded-full hover:bg-[#FFC107] transition-colors">
                            <img src="/svg/arrow.svg" alt="" className="w-5 h-5" />
                        </SimpleLink>
                    </div>
                    <div id="part2" className="hidden md:flex bg-white w-auto max-w-md h-1/2 shadow-lg shadow-black/20 rounded-xl flex-row justify-between items-center px-4">
                        <label htmlFor="search"><img src="/svg/search.svg" alt="" className="w-5 h-5"/></label>
                        <input type="search" name="searchInput" id="search" className="w-full ml-2 outline-none" placeholder="Rechercher"/>
                    </div>
                    <div id="part3" className="flex flex-row items-center gap-3 md:gap-5">
                        <SimpleLink to={`/basket`} className="relative flex items-center justify-center pr-3 md:pr-5 border-r border-black">
                            <div className="relative">
                                <img src="/svg/basket.svg" alt="" className="w-8 h-8 md:w-10 md:h-10"/>
                                {data.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-[#FFC107] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {data.length}
                                    </span>
                                )}
                            </div>
                        </SimpleLink>
                        <SimpleLink to="" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                            <img src="/svg/user.svg" alt="" className="w-8 h-8 md:w-10 md:h-10"/>
                        </SimpleLink>
                    </div>
                </nav>
            </Header>
            
            <MiddleSection>
                <div id="content" className="w-full flex flex-col lg:flex-row">
                    <SideNav onClick={toggleSideNav} className={`hidden lg:static inset-y-0 left-0 z-20 transform ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-[#3B4F3A] p-4 overflow-y-auto`}>
                        <button onClick={toggleSideNav} className="absolute top-4 right-4 text-white">
                            <img src="/svg/close.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        {/* Ajoutez ici le contenu de votre SideNav */}
                    </SideNav>
                    <div id="mainSection" className="flex-1">
                        <div id="filter" className="sticky top-0 z-10 w-full bg-black py-4">
                            <div className="flex flex-row justify-center items-center gap-4 md:gap-20 px-4 overflow-x-auto">
                                <button className="text-[#EDDD5E] font-bold text-sm md:text-lg whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#EDDD5E]/20 transition-colors">Grand Bétail</button>
                                <button className="text-[#EDDD5E] font-bold text-sm md:text-lg whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#EDDD5E]/20 transition-colors">Petit bétail</button>
                                <button className="text-[#EDDD5E] font-bold text-sm md:text-lg whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#EDDD5E]/20 transition-colors">Volaille</button>
                            </div>
                        </div>
                        <div id="categories" className="w-full px-4 md:px-8 py-6">
                            <section id="category" className="w-full mb-8">
                                <h2 className="text-xl md:text-2xl text-[#404A3D] font-bold mb-6">Pour vous</h2>
                                <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                    <TrueProduct to={``} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886308/twoLapin_xcxvwm.jpg'} name={'Lapin'} descript={'Lapin domestique'} price={'25 $'} />
                                    <TrueProduct to={``} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054490/Cobaye4_ilgcbu.jpg'} name={'Cobaye'} descript={'Cobaye à poils lisses'} price={'15 $'} />
                                    <TrueProduct to={``} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735211090/pigeon_hv9tos.jpg'} name={'Pigeon'} descript={'Pigeon biset'} price={'20 $'} />
                                    <TrueProduct to={``} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={'https://res.cloudinary.com/ddwgsvzlw/image/upload/v1735054489/Dindon1_xxqmc4.jpg'} name={'Dindon'} descript={'Dindon rouge'} price={'15 $'} />
                                </div>
                            </section>
                            <section id="category" className="w-full mb-8">
                                <h2 className="text-xl md:text-2xl text-[#404A3D] font-bold mb-6">Grand bétail</h2>
                                <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                {Category1.map((product:productProps)=>(
                                    <TrueProduct key={product.productId} to={`/productDetails/${product.productId}`} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={product.productImage} name={product.productName} descript={product.productDescript} price={`${product.price} $`}/>
                                ))}
                                </div>    
                            </section>
                            <section id="category" className="w-full mb-8">
                                <h2 className="text-xl md:text-2xl text-[#404A3D] font-bold mb-6">Petit bétail</h2>
                                <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                {Category2.map((product:productProps)=>(
                                    <TrueProduct key={product.productId} to={`/productDetails/${product.productId}`} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={product.productImage} name={product.productName} descript={product.productDescript} price={`${product.price} $`}/>
                                ))}
                                </div>    
                            </section>
                            <section id="category" className="w-full mb-8">
                                <h2 className="text-xl md:text-2xl text-[#404A3D] font-bold mb-6">Volaille</h2>
                                <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                {Category3.map((product:productProps)=>(
                                    <TrueProduct key={product.productId} to={`/productDetails/${product.productId}`} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={product.productImage} name={product.productName} descript={product.productDescript} price={`${product.price} $`}/>
                                ))}
                                </div>    
                            </section>
                            <div className="mt-8">{JSON.stringify(users)}</div>
                            <div className="flex justify-center mt-8">
                                <button 
                                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors" 
                                    onClick={handleDeconnection}
                                >
                                    Déconnexion
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </MiddleSection>
        </>
    )
}

export default ClientProducts