import { useMemo, useState, useRef, useEffect } from "react";
import Header from "../header/header";
import SimpleLink from "../link&btn/simpleLink";
import MiddleSection from "../middleSection/middleSection";
// import SideNav from "../sideNav/sideNav";
import ProductInBasket from "../card/productInBasket";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../store/zustand";
import { commandProps } from "../../store/zustand";  // Importer le type de commande
import { productProps } from "../../components/card/product";

import { createCommand } from "../services/api";

const Basket = () => {

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  // const toggleSideNav = () => {
  //   setIsOpen(!isOpen);
  // };

  const { data, setCommands } = useStore(); // Récupérer setCommands depuis le store

  const users = JSON.parse(localStorage.getItem("user_info") || "{}");
    
  const userId = users.user_id;

  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalPrice = useMemo(() => {
    return data.reduce((total: number, product: productProps) => {
      return total + (Number(product.price) * product.quantity);
    }, 0);
  }, [data]);

  // Format price to 2 decimal places
  const formattedTotalPrice = totalPrice.toFixed(2);

  const handleOrder = async () => {
    const store = useStore.getState();
    const { data } = store;
  
    if (data.length === 0) {
      console.error("Le panier est vide");
      return;
    }

  
    const commands: commandProps[] = data.map((item) => ({
      command_date: new Date(),
      global_price: (Number(item.price) * item.quantity).toString(), // Prix total pour cet article
      quantity: item.quantity,
    //   command_num: `CMD-${Date.now()}-${Math.floor(Math.random() * 1000)}`, // Plus unique
      user: userId,
      product: item.productId,
    }));
  
    try {
      // Envoyer toutes les commandes en une seule requête
      const result = await createCommand(commands);
      console.log("Résultat de la commande:", result);
  console.log(commands);
  
      setCommands(commands);
      store.reset();
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const handleBasketClick = (e: React.MouseEvent) => {
    if (data.length === 0) {
        e.preventDefault();
        return;
    }
  };
const isLoggedIn = Object.keys(users).length > 0;
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



  return (
    <>
     <Header className="w-full h-20 bg-[#C7DDB5] shadow-md shadow-black/20 px-4 md:px-10 z-30">
                <nav className="w-full h-full flex flex-row justify-between items-center">
                    <div id="part1" className="flex flex-row items-center gap-2 md:gap-5">
                        <button className="p-2 hover:bg-[#EDDD5E]/20 rounded-lg transition-colors">
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
        <div id="content" className="w-full flex flex-row">
          {/* <SideNav className={`sidebar ${isOpen ? "h-full w-[20%] bg-[#3B4F3A] p-4 flex flex-col" : "hidden"}`} /> */}
          <div
            id="mainSection"
            className= "w-[100%] flex flex-col justify-center gap-20"
          >
            <div className="w-full flex justify-between mt-10 px-10">
              <h2 className="text-2xl text-[#404A3D] font-bold">Panier</h2>
              <div id="price" className="flex items-center gap-2">
                <span className="text-gray-600">Prix total</span>
                <span className="bg-[#404A3D] px-2 py-1 rounded text-white">{formattedTotalPrice}$</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              {data?.map((product: productProps) => {
                return (
                  <ProductInBasket
                    key={product.productId}
                    name={product.productName}
                    id={product.productId.toString()}
                    image={product.productImage}
                    weight={product.weight.toString()}
                    quantity={product.quantity}
                    gender={product.gender}
                    age={product.age.toString()}
                    price={product.price.toString()}
                    descript={product.productDescript}
                  />
                );
              })}

              <div id="btnSection" className="w-full h-20 flex flex-row items-center justify-between px-10">
                <Link
                  to={`/products`}
                  className="bg-transparent w-auto h-12 text-[#658221] font-bold hover:cursor-pointer border-b-[3px] border-[#404A3D] hover:bg-[#9BA3AF] hover:shadow-lg shadow-black p-3"
                >
                  Continuer le shopping
                </Link>
                <button
                  onClick={handleOrder}
                  className="bg-[#658221] w-auto h-12 rounded-md text-white font-semibold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black flex justify-center items-center p-2"
                >
                  Commander
                </button>
              </div>
            </div>
          </div>
        </div>
      </MiddleSection>
    </>
  );
};

export default Basket;