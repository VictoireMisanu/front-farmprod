import { useEffect, useState } from "react";
import Header from "../header/header";
import SimpleLink from "../link&btn/simpleLink";
import MiddleSection from "../middleSection/middleSection";
import SideNav from "../sideNav/sideNav";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import useStore from "../../store/zustand";

export interface productProps {
    key?: string;
    classname: string;
    productImage: string;
    productName: string;
    price: number;
    productId: number;
    productDescript: string;
    birthDate: Date;
    lifeDuration: number;
    category: number;
    createdAt: Date;
    farm: number;
    updatedAt: Date;
    weight: number;
    quantity: number;
    age: number;
    gender: string;
}

const ProductDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const { id } = useParams();
    const { appendData, data } = useStore();
    
    const [products, setProducts] = useState<productProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            if (!id) {
                setError("ID du produit non trouvé");
                setLoading(false);
                return;
            }

            try {
                console.log("Fetching product with ID:", id);
                const dataProduct = await getProduct(id);
                console.log("Received product data:", dataProduct);
                
                if (!dataProduct || (Array.isArray(dataProduct) && dataProduct.length === 0)) {
                    setError("Produit non trouvé");
                    setLoading(false);
                    return;
                }

                // Si dataProduct est un tableau, utilisez-le directement, sinon créez un tableau avec l'objet
                const productArray = Array.isArray(dataProduct) ? dataProduct : [dataProduct];
                setProducts(productArray);
                setLoading(false);
            } catch (err: unknown) {
                console.error("Error fetching product:", err);
                const errorMessage = err instanceof Error 
                    ? `Erreur lors du chargement des produits: ${err.message}`
                    : 'Erreur lors du chargement des produits';
                setError(errorMessage);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [id]);

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    }

    const decrementQuantity = () => {
        setQuantity(prev => prev > 1 ? prev - 1 : 1);
    }

    // const calculateLifespan = (birthDate: Date): number => {
    //     const currentDate = new Date();
    //     const differenceInMonths = (currentDate.getFullYear() - birthDate.getFullYear()) * 12 + 
    //                               (currentDate.getMonth() - birthDate.getMonth());
    //     return differenceInMonths;
    // };
    
    const handleAddToCart = () => {
        if (!products || products.length === 0) {
            console.error("No product data available");
            return;
        }
        
        const product: productProps = {
            ...products[0],
            quantity,
            weight: Number(weight),
            gender,
            age: Number(age)
        }

        console.log("Adding to cart:", product);
        appendData(product);
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-red-600">{error}</p>
            </div>
        );
    }

    if (!products || products.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-gray-600">Aucun produit trouvé</p>
            </div>
        );
    }

    // Log the product data before rendering
    // console.log("Rendering product:", products[0]);

    return (
        <>
            <Header className="w-full h-20 bg-[#C7DDB5] shadow-md shadow-black/20 px-10">
                <nav className="w-full h-full flex flex-row justify-between items-center">
                    <div id="part1" className="flex flex-row items-center gap-5">
                        <button onClick={toggleSideNav}><img src="/svg/burger.svg" alt="" /></button>
                        <SimpleLink to="" className="bg-[#EDDD5E] flex items-center justify-center h-12 w-12 p-2 rounded-full"><img src="/svg/arrow.svg" alt="" /></SimpleLink>
                    </div>
                    <div id="part2" className="bg-white w-auto h-1/2 shadow-lg shadow-black/20 rounded-xl flex flex-row justify-between items-center px-2">
                        <label htmlFor="search"><img src="/svg/search.svg" alt="" className="w-7 h-7"/></label>
                        <input type="search" name="searchInput" id="search" className="w-2/3 outline-none" placeholder="Rechercher"/>
                    </div>
                    <div id="part3" className="flex flex-row items-center gap-5">
                        <SimpleLink to={`/basket`} className="flex items-center justify-center pr-5 border-black border-r-[1px]">
                            <div>
                                <img src="/svg/basket.svg" alt="" className="w-10 h-10"/>
                                {data.length.toString()}
                            </div>
                        </SimpleLink>                        
                        <SimpleLink to="" className="flex items-center justify-center"><img src="/svg/user.svg" alt="" className="w-10 h-10"/></SimpleLink>
                    </div>
                </nav>
            </Header>
            <MiddleSection>
                <div id="content" className="w-full flex flex-row">
                    <SideNav className={`sidebar ${isOpen ? 'h-screen w-[20%] bg-[#3B4F3A] p-4 flex flex-col' : 'hidden'}`}/>
                    <div id="mainSection" className={`sidebar ${isOpen ? 'h-screen w-[80%] flex flex-row justify-center gap-20 py-20' : 'w-[100%] h-screen flex flex-row justify-center gap-20 py-20'}`}>
                        <div id="productImage" className="w-[30%] h-[90%]">
                            {products[0]?.productImage && (
                                <img 
                                    src={products[0].productImage} 
                                    alt={products[0].productName || 'product'} 
                                    className="w-full h-full rounded-lg object-cover"
                                />
                            )}
                        </div>
                        <div id="details" className="bg-[#d8e4d5] p-6 rounded-lg max-w-md h-auto">
                            <h2 className="text-2xl font-semibold text-[#4a4a4a] mb-4">
                                {products[0]?.productName || 'Nom du produit non disponible'}
                            </h2>
      
                            <div className="inline-block border bg-[#5b8350] rounded px-3 py-1 mb-6">
                                <span className="text-[#F2EEEE] font-bold">
                                    {products[0]?.price ? `${products[0].price}€` : 'Prix non disponible'}
                                </span>
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
                                <span>Ajouter au panier</span>
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
                                {products[0]?.productDescript || 'Description non disponible'}
                            </p>
                            {products[0]?.birthDate && products[0]?.lifeDuration && (
                                <div className="bg-black text-white text-wrap p-2 mt-4 rounded">
                                    <p>Date de naissance : {new Date(products[0].birthDate).toLocaleDateString()}</p>
                                    {/* <p>Durée de vie : {calculateLifespan(products[0].age)} ans</p> */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </MiddleSection>
        </>
    );
}

export default ProductDetails;