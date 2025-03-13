import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import Footer from "../footer/footer"
import Header from "../header/header"
import { BtnIcon } from "../link&btn/btnIcon"
import { Menu, X } from 'lucide-react'
import SimpleLink from "../link&btn/simpleLink"
import Logo from "../logo/logo"
import MiddleSection from "../middleSection/middleSection"
import SectionTitle from '../title/sectionTitle';
import Service from '../card/service';
import { Product, productProps } from '../card/product';
import { getProducts } from '../services/api';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    if (loading) return (
        <div className=" h-screen w-full bg-slate-300 flex justify-center items-center">
            <img src="/logo/logoApp.png" alt="farmProd"  />
        </div>
    )
    if (error) return <div className="text-center text-red-500">{error}</div>;

    const someProducts = products.slice(0, 4)

    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
            .then(
                (result) => {
                    console.log('Message envoyé avec succès', result.text);
                },
                (error) => {
                    console.error('Erreur lors de l\'envoi du message', error.text);
                }
            );
    }

    return (
        <>
            <Header className="bg-white w-full h-20 flex justify-between items-center pl-4 md:pl-16 shadow-md shadow-black/20 fixed z-10">
                <Logo className="text-2xl md:text-4xl text-[#404A3D] font-bold font-['Titan One']" />
                <nav id="navElement" className="h-full px-4 md:px-10 hidden md:flex flex-row items-center justify-center gap-4 md:gap-12">
                    <SimpleLink to={`/`} className="text-sm md:text-md text-[#5B8C51] p-2 rounded-lg hover:bg-[#FEF3B8] font-normal" children='Acceuil' />
                    <SimpleLink to={`#`} className="text-sm md:text-md text-black font-normal bg-none p-2 rounded-lg hover:bg-[#FEF3B8] hover:text-[#5B8C51]" children='A propos' />
                    <SimpleLink to={`/products`} className="text-sm md:text-md text-black font-normal bg-none p-2 rounded-lg hover:bg-[#FEF3B8] hover:text-[#5B8C51]" children='Produits' />
                    <SimpleLink to={`/createFarm`} className="text-sm md:text-md text-black font-normal bg-none p-2 rounded-lg hover:bg-[#FEF3B8] hover:text-[#5B8C51]" children='Fermiers' />
                </nav>
                <div id="btnSection" className="hidden md:flex h-full w-auto md:w-[22rem] flex-row items-center justify-center px-4 md:px-10 gap-4 md:gap-5">
                    <BtnIcon to={`/products`} className="w-2/3 h-1/2 bg-[#EDDD5E] rounded-2xl p-3 flex flex-row justify-around items-center hover:bg-[#FFC107] hover:shadow-lg shadow-black text-sm md:text-md text-black font-semibold">
                        <span>Commander</span>
                        <img src="/svg/basket.svg" alt="" />
                    </BtnIcon>
                    <SimpleLink to={`/signUp`} className="border-l-[1px] border-black pl-5 flex items-center justify-center "><img src="/svg/user.svg" alt="" className="w-8 md:w-10 h-8 md:h-10" /></SimpleLink>
                </div>
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden z-20 p-2 hover:bg-green-500/30 rounded-md transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-8 h-8 text-white transition-transform duration-300" />
                    ) : (
                        <Menu className="w-8 h-8 text-green-950 transition-transform duration-300" />
                    )}
                </button>

                {/* Menu Mobile */}
                <div className={`
                    lg:hidden fixed inset-0 bg-black/95 z-10
                    transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}>
                    <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white">
                        <li className="w-full text-center">
                            <Link 
                                to="/" className="block px-4 py-2 hover:bg-green-500/30 transition-colors"
                            >
                                Acceuil
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link 
                                to="/" 
                                className="block px-4 py-2 hover:bg-green-500/30 transition-colors"
                            >
                                A propos
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link 
                                to={`/products`} className="block px-4 py-2 hover:bg-green-500/30 transition-colors"
                            >
                                Produit
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link 
                                to={`/createFarm`} className="block px-4 py-2 hover:bg-green-500/30 transition-colors"
                            >
                                Fermiers
                            </Link>
                        </li>
                        <li className="w-full text-center">
                            <Link 
                                to={`/signUp`} className="block px-4 py-2 hover:bg-green-500/30 transition-colors"
                            >
                                Compte
                            </Link>
                        </li>
                    </ul>
                </div>
            </Header>
<div className="w-full">
      <MiddleSection>
        <div>
          {/* Hero Section */}
          <div id="heroSection" className="w-full min-h-screen bg-[url('https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734808207/threeCows_rttzmr.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-around px-4 lg:px-44 pt-20 md:pt-36">
            <div id="text" className="w-full md:w-[30rem] h-3/4 flex flex-col gap-6 md:gap-10 lg:gap-20 px-4 md:px-20">
              <div>
                <div className="text-white text-base md:text-lg lg:text-xl">Bienvenue <span>chez</span></div>
                <div className="text-xl md:text-2xl lg:text-3xl text-white">FarmProd</div>
              </div>
              <p className="text-['Libre_Baskerville'] text-2xl md:text-3xl lg:text-5xl text-white leading-[35px] md:leading-[45px] lg:leading-[60px]">
                Le choix idéal pour vos produits de champs et de ferme
              </p>
            </div>
            <div id="btnSection" className="h-auto md:h-20 w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10 gap-4 py-6 md:py-0">
              <BtnIcon to={`/products`} className="w-full md:w-auto h-12 md:h-1/2 bg-[#EDDD5E] rounded-2xl p-3 flex justify-center md:justify-around items-center gap-3 hover:bg-[#FFC107] hover:shadow-lg shadow-black text-sm md:text-base text-black font-bold">
                <span>Commander dès maintenant</span>
                <img src="/svg/basket.svg" alt="" className="w-6 h-6" />
              </BtnIcon>
              <SimpleLink to={`#`} className="w-full md:w-1/4 h-12 md:h-1/2 border-2 border-[#EDDD5E] rounded-2xl p-3 flex justify-center items-center hover:bg-[#405500] hover:border-none hover:shadow-lg shadow-black text-sm md:text-base text-[#EDDD5E] font-normal">
                En savoir plus
              </SimpleLink>
            </div>
          </div>

          {/* About Section */}
          <div id="aboutSection" className="bg-[#C7DDB5] w-full min-h-[35rem] flex flex-col px-4 md:px-16 py-10">
            <SectionTitle className='font-semibold text-[#5B8C51] text-xl md:text-2xl mb-2'>
              A propos de nous
            </SectionTitle>
            <div id="content" className="flex flex-col lg:flex-row py-10 md:py-20 w-full">
              <div id="image" className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 md:p-20">
                <div className="grid grid-cols-2 gap-4 w-full md:w-2/3">
                  <img src="/images/cheese.png" alt="" className="w-full h-40 md:h-48 object-cover rounded-tl-[2rem] md:rounded-tl-[4rem]" />
                  <img src="/images/bee.png" alt="" className="w-full h-40 md:h-48 object-cover" />
                  <img src="/images/honey.png" alt="" className="w-full h-40 md:h-48 object-cover" />
                  <img src="/images/2roosters.png" alt="" className="w-full h-40 md:h-48 object-cover" />
                </div>
              </div>
              <div id="text" className="w-full lg:w-1/2 px-4 md:px-10 py-5 flex flex-col gap-10 lg:border-l-[1px] lg:border-black mt-8 lg:mt-0">
                <div>
                  <p className="font-sans font-normal leading-7 md:leading-8 text-lg md:text-xl">
                    Nous sommes une plateforme numérique qui offre un espace propice
                    pour la vente et l'achat des produits de fermes et agricoles.
                  </p>
                </div>
                <SimpleLink 
                  id='learnMore' 
                  to={`/signUp`} 
                  className='h-12 md:h-1/5 w-full md:w-40 p-3 rounded-xl text-md border-[#5B8C51] border-[3px] text-[#5B8C51] text-center font-semibold shadow-lg shadow-black/50 flex items-center justify-center hover:bg-[#5B8C51] hover:text-white hover:border-none'
                >
                  En savoir plus
                </SimpleLink>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div id="services" className="bg-white w-full min-h-[35rem] flex flex-col px-4 md:px-16 my-10">
            <SectionTitle className='font-semibold text-[#5B8C51] text-xl md:text-2xl mb-2'>
              Services
            </SectionTitle>
            <div className="text-lg md:text-xl">Bénéficier des services tels que :</div>
            <div id="content" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-12 py-10 md:py-20">
              <Service className='h-56' src="/images/Poule1.jpg">
                <p className="text-sm font-semibold">Service de vente et/ou d'achat</p>
                <p className="font-light text-md text-justify">Que vous soyez fermier ou acheteur, vendez et/ou acheter le produit de votre choix.</p>
              </Service>
              <Service className='h-56' src="/images/cow.png">
                <p className="text-sm font-semibold">Canal de contact avec les Fermiers</p>
                <p className="font-light text-md text-justify">En tant qu'acheteur, écrivez à votre fournisseur de produits agricoles ou de ferme.</p>
              </Service>
              <Service className='h-56' src='/images/pouletBlanc.jpg'>
                <p className="text-sm font-semibold">Information</p>
                <p className="font-light text-md text-justify">Vous permettre de rester informé lorsque vos fourisseurs publient des noveaux produits.</p>
              </Service>
            </div>
          </div>

          {/* Products Section */}
          <div id="product" className="bg-[#F2EEEE] w-full min-h-[45rem] flex flex-col justify-evenly px-4 md:px-16 mt-20">
            <SectionTitle className='font-semibold text-[#5B8C51] text-xl md:text-2xl mb-2'>
              Produits
            </SectionTitle>
            <div id="content" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 md:py-20">
              {someProducts.map((product: productProps) => (
                <Product
                  key={product.key}
                  classname="h-72 w-full drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col gap-5"
                  productImage={product.productImage}
                  productName={product.productName}
                />
              ))}
            </div>
            <div id="sectionbtn" className="flex justify-center md:justify-start py-6">
              <div id="learnMore" className="flex gap-2 items-center">
                <a href="#" className="rounded-xl bg-[#404A3D] p-3 w-48 md:w-56 text-sm md:text-md text-[#FFC107] text-center font-normal shadow-lg shadow-black/50 hover:bg-[#4a5647] transition-colors">
                  En savoir plus
                </a>
                <a href="#" className="rounded-full border-2 border-[#5B8C51] w-10 h-10 text-[#5B8C51] shadow-lg shadow-black/50 flex justify-center items-center hover:bg-[#5B8C51] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="writeUs" className="bg-[url('https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886261/goose_m2q4jt.png')] bg-no-repeat bg-center bg-cover w-full min-h-screen flex flex-col px-4 md:px-16 py-10 gap-10">
            <SectionTitle className='font-semibold text-[#5B8C51] text-xl md:text-2xl mb-2'>
              Laissez-nous un message
            </SectionTitle>
            <div id="content" className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
              <form className="w-full lg:w-1/2 p-4 md:p-10 flex flex-col gap-10 bg-white/80 rounded-lg" onSubmit={handleSendEmail}>
                <p className="text-lg">
                  Sentez-vous libre de nous écrire.
                  Nous vous rassurons que nous vous répondrons dès que possible.
                </p>
                <div id="content" className='flex flex-col gap-5'>
                  <input 
                    className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' 
                    placeholder='Prenom et nom' 
                    type="text" 
                    name='userName' 
                  />
                  <input 
                    className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' 
                    placeholder='Adress email' 
                    type="email" 
                    name='emailAddress' 
                  />
                  <textarea 
                    className='bg-transparent border-b-[1px] border-black w-full h-24 p-5 outline-none resize-none' 
                    placeholder='Votre message' 
                    name='message'
                  ></textarea>
                  <button 
                    className='bg-[#404A3D] w-full h-12 text-[#FFC107] font-bold hover:cursor-pointer hover:text-[#404A3D] hover:border-[#404A3D] border-2 hover:bg-transparent hover:shadow-lg hover:rounded-md shadow-black transition-all duration-300'
                    type="submit"
                  >
                    Envoyer
                  </button>
                </div>
              </form>

              <div id="contact" className="w-full lg:w-1/3 bg-[#404A3D] relative p-8 md:p-14">
                <div className="absolute -left-5 -top-5 w-10 h-10 bg-[#FFC107]"></div>
                <div className="absolute -right-5 bottom-5 w-10 h-10 bg-[#FFC107]"></div>
                <div className="flex flex-col gap-8">
                  <div className="text-[#FFC107] text-xl font-extrabold font-['Roboto Serif'] text-center">
                    Info
                  </div>
                  <div className="flex flex-col gap-7">
                    <a href="tel:+24382505784" className="flex items-center gap-3 group">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#FEF3B8" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                        </svg>
                      </span>
                      <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] group-hover:text-[#FFC107] transition-colors">
                        +2438 2505 7845
                      </div>
                    </a>
                    <a href="mailto:contact.farmprod@gmail.com" className="flex items-center gap-3 group">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#FEF3B8" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                        </svg>
                      </span>
                      <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] group-hover:text-[#FFC107] transition-colors">
                        contact.farmprod@gmail.com
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="#FEF3B8" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8.5-.207V6.97a.5.5 0 1 0-1 0v5.015a.5.5 0 0 0 .146.369l2.829 2.828a.5.5 0 1 0 .707-.707z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web']">
                        9h - 18h
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MiddleSection>
    </div>
            <Footer />
        </>
    )
}

export default LandingPage