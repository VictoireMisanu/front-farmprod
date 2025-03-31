import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../header/header";
import SimpleLink from "../link&btn/simpleLink";
import MiddleSection from "../middleSection/middleSection";
import TrueProduct from "../card/trueProduct";
import useStore from "../../store/zustand";
import { productProps } from "../card/product";
import { getProducts } from '../services/api';

const ClientProducts = () => {
    const navigate = useNavigate();
    const {data} = useStore();
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [products, setProducts] = useState<productProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const users = JSON.parse(localStorage.getItem('user_info') || '{}');
    const isLoggedIn = Object.keys(users).length > 0;

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

        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    const Category1 = products.filter((produit) => produit.category === 1);
    const Category2 = products.filter((produit) => produit.category === 2);
    const Category3 = products.filter((produit) => produit.category === 3);

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    const handleUserIconClick = () => {
        if (!isLoggedIn) {
            navigate('/signUp');
            return;
        }
        setShowUserMenu(!showUserMenu);
    };

    const handleDeconnection = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_info');
        setShowUserMenu(false);
        navigate('/');
    };

    const handleCategoryClick = (category: number) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    const handleBasketClick = (e: React.MouseEvent) => {
        if (data.length === 0) {
            e.preventDefault();
            return;
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#404A3D]"></div></div>;
    if (error) return <div className="min-h-screen flex items-center justify-center"><div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{error}</div></div>;

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
                    <SimpleLink 
                            to={`/basket`} 
                        
                            className={`relative flex items-center justify-center pr-3 md:pr-5 border-r border-black ${data.length === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                        >
                            <button className="relative" onClick={handleBasketClick}>
                                <img src="/svg/basket.svg" alt="" className="w-8 h-8 md:w-10 md:h-10"/>
                                {data.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-[#FFC107] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {data.length}
                                    </span>
                                )}
                            </button>
                        </SimpleLink>
                        <div className="relative">
                            <button 
                                onClick={handleUserIconClick}
                                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                            >
                                <img src="/svg/user.svg" alt="" className="w-8 h-8 md:w-10 md:h-10"/>
                            </button>
                            {showUserMenu && isLoggedIn && (
                                <div 
                                    ref={dropdownRef}
                                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                                >
                                    <div className="px-4 py-3 border-b border-gray-200">
                                        <p className="text-sm font-medium text-gray-900">{users.user_name}</p>
                                        <p className="text-sm text-gray-500">{users.user_email}</p>
                                    </div>
                                    <button 
                                        onClick={handleDeconnection}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                                    >
                                        Déconnexion
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </Header>
            
            <MiddleSection>
                <div id="content" className="w-full flex flex-col lg:flex-row">
                    <div id="mainSection" className="flex-1">
                        <div id="filter" className="sticky top-0 z-10 w-full bg-black py-4">
                            <div className="flex flex-row justify-center items-center gap-4 md:gap-20 px-4 overflow-x-auto">
                                <button 
                                    onClick={() => handleCategoryClick(1)}
                                    className={`text-[#EDDD5E] font-bold text-sm md:text-lg whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#EDDD5E]/20 transition-colors ${selectedCategory === 1 ? 'bg-[#EDDD5E]/20' : ''}`}
                                >
                                    Grand Bétail
                                </button>
                                <button 
                                    onClick={() => handleCategoryClick(2)}
                                    className={`text-[#EDDD5E] font-bold text-sm md:text-lg whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#EDDD5E]/20 transition-colors ${selectedCategory === 2 ? 'bg-[#EDDD5E]/20' : ''}`}
                                >
                                    Petit bétail
                                </button>
                                <button 
                                    onClick={() => handleCategoryClick(3)}
                                    className={`text-[#EDDD5E] font-bold text-sm md:text-lg whitespace-nowrap px-4 py-2 rounded-lg hover:bg-[#EDDD5E]/20 transition-colors ${selectedCategory === 3 ? 'bg-[#EDDD5E]/20' : ''}`}
                                >
                                    Volaille
                                </button>
                            </div>
                        </div>
                        <div id="categories" className="w-full px-4 md:px-8 py-6">
                            {(!selectedCategory || selectedCategory === 1) && (
                                <section id="category" className="w-full mb-8">
                                    <h2 className="text-xl md:text-2xl text-[#404A3D] font-bold mb-6">Grand bétail</h2>
                                    <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                        {Category1.map((product:productProps)=>(
                                            <TrueProduct key={product.productId} to={`/productDetails/${product.productId}`} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={product.productImage} name={product.productName} descript={product.productDescript} price={`${product.price} $`}/>
                                        ))}
                                    </div>    
                                </section>
                            )}
                            {(!selectedCategory || selectedCategory === 2) && (
                                <section id="category" className="w-full mb-8">
                                    <h2 className="text-xl md:text-2xl text-[#404A3D] font-bold mb-6">Petit bétail</h2>
                                    <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                        {Category2.map((product:productProps)=>(
                                            <TrueProduct key={product.productId} to={`/productDetails/${product.productId}`} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={product.productImage} name={product.productName} descript={product.productDescript} price={`${product.price} $`}/>
                                        ))}
                                    </div>    
                                </section>
                            )}
                            {(!selectedCategory || selectedCategory === 3) && (
                                <section id="category" className="w-full mb-8">
                                    <h2 className="text-xl md:text-2xl text-[#404A3D] font-bold mb-6">Volaille</h2>
                                    <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                        {Category3.map((product:productProps)=>(
                                            <TrueProduct key={product.productId} to={`/productDetails/${product.productId}`} className="bg-[#CCDCC3] p-4 rounded-lg flex flex-col transform hover:scale-105 transition-transform" src={product.productImage} name={product.productName} descript={product.productDescript} price={`${product.price} $`}/>
                                        ))}
                                    </div>    
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </MiddleSection>
        </>
    );
};

export default ClientProducts;