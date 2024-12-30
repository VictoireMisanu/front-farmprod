import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import Footer from "../footer/footer"
import Header from "../header/header"
import { BtnIcon } from "../link&btn/btnIcon"
import SimpleLink from "../link&btn/simpleLink"
import Logo from "../logo/logo"
import MiddleSection from "../middleSection/middleSection"
import SectionTitle from '../title/sectionTitle';
import Service from '../card/service';
import { Product, productProps } from '../card/product';
import { getProducts } from '../services/api';

const LandingPage:React.FC = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
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

    if (loading) return <div className="text-center">Chargement...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    
    console.log(products)

    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        emailjs.sendForm('service_ovww2ku', 'template_d58ekw9', e.target as HTMLFormElement, '9X2ljprEAJ-y3kcvy')

        .then(
            (result) => {
            console.log('Message envoyé avec succès', result.text);
            },
            (error) => {
            console.error('Erreur lors de l\'envoi du message', error.text);
            }
        );
        
    }
    const someProducts = products.slice(0,4)
    return (
        
        <>
            <Header className ="bg-white w-full h-20 flex justify-between items-center pl-16 shadow-md shadow-black/20 fixed z-10">
                <Logo className="text-4xl text-[#404A3D] font-bold font-['Titan One']"/>
                <nav id="navElement" className="w-42 h-full flex flex-row items-center justify-center px-10 gap-12">
                        <SimpleLink to={`/signUp`} className="text-md text-[#5B8C51] p-2 rounded-lg hover:bg-[#FEF3B8] font-normal" children='Acceuil'/>
                        <SimpleLink to={`/signUp`} className="text-md text-black  font-normal bg-none p-2 rounded-lg hover:bg-[#FEF3B8] hover:text-[#5B8C51]" children='A propos'/>
                        <SimpleLink to={`/products`} className="text-md text-black  font-normal bg-none p-2 rounded-lg hover:bg-[#FEF3B8] hover:text-[#5B8C51]" children='Produits'/>
                        <SimpleLink to={`/signUp`} className="text-md text-black  font-normal bg-none p-2 rounded-lg hover:bg-[#FEF3B8] hover:text-[#5B8C51]" children='Fermiers'/>
                </nav   >
                <div id="btnSection" className="h-full w-[22rem] flex flex-row items-center justify-center px-10 gap-5">
                        <BtnIcon to={`/products`} className="w-2/3 h-1/2 bg-[#EDDD5E] rounded-2xl p-3 flex flex-row justify-around items-center hover:bg-[#FFC107] hover:shadow-lg shadow-black lg:md:text-md text-black font-semibold">
                            <span>Commander</span>
                            <img src="/svg/basket.svg" alt="" />
                        </BtnIcon>
                        

                </div>
            </Header>
            <MiddleSection>
                <div>
                        <div id="heroSection" className="w-full h-screen bg-[url('https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734808207/threeCows_rttzmr.png')] bg-no-repeat bg-center bg-cover flex flex-col justify-around px-44 pt-36">
                            <div id="text" className="w-[30rem] h-3/4 flex flex-col gap-20">
                                <div className="">
                                    <div className="text-white text-xl">Bienvenue <span>chez</span></div>
                                    <div className="text-3xl text-white">FarmProd</div>
                                </div>
                                <p className="text-['Libre_Baskerville'] text-5xl text-white leading-[60px]">Le choix idéal pour vos produits de champs et de ferme</p>
                            </div>
                            <div id="btnSection" className="lg:h-20 w-full flex flex-row items-center justify-center px-10 gap-5">
                                <BtnIcon to={`/signUp`} className="w-64 h-1/2 bg-[#EDDD5E] rounded-2xl p-3 flex justify-around items-center gap-3 hover:bg-[#FFC107] hover:shadow-lg shadow-black md:text-sm lg:text-md text-black font-bold">
                                    <span>Commander dès maintenant</span>
                                    <img src="/svg/basket.svg" alt="" />
                                </BtnIcon>
                                <SimpleLink to={`/signUp`} className="w-1/4 h-1/2 border-2 border-[#EDDD5E] rounded-2xl p-3 flex justify-center items-center hover:bg-[#405500] hover:border-none hover:shadow-lg shadow-black md:text-sm lg:text-md text-[#EDDD5E] font-normal" children='En savoir plus'/>
                                        
                            </div>
                        </div>
                        <div id="aboutSection" className="bg-[#C7DDB5] w-full h-[35rem] flex flex-col px-16 py-10">
                            <SectionTitle className='font-semibold text-[#5B8C51] text-2xl mb-2' children='A propos de nous'/>
                            <div id="content" className="flex flex-row py-20 w-full h-[30rem]">
                            <div id="image" className="w-2/3 h-full flex flex-col justify-center items-center p-20">
                                <div className="flex flex-row w-2/3 h-full gap-5">
                                    <img src="/images/cheese.png" alt="" className="mt-5 w-56 h-[90%] rounded-tl-[4rem]"/>
                                    <img src="/images/bee.png" alt="" className="mt-5 w-56 h-[90%]"/>
                                </div>
                                <div className="flex flex-row w-2/3 h-full gap-5 mt-5">
                                    <img src="/images/honey.png" alt="" className="w-56 h-[90%]"/>
                                    <img src="/images/2roosters.png" alt="" className="w-56 h-[90%]"/>
                                </div>
                            </div>
                            
                            <div id="text" className="w-2/3 h-full px-10 py-5 flex flex-col gap-10 border-l-[1px] border-black">
                                <div id="text">
                                    <p className="font-sans font-normal leading-8 text-xl">Nous sommes une plateforme numérique qui offre un espace propice 
                                        pour la vente et l’achat des produits de fermes et agricoles.
                                    </p>
                                </div>
                                <SimpleLink id='learnMore' to={`/signUp`} className=' h-1/5 w-40 p-3 rounded-xl  text-md border-[#5B8C51] border-[3px] text-[#5B8C51] text-center font-semibold shadow-lg shadow-black/50 flex items-center justify-center hover:bg-[#5B8C51] hover:text-white hover:border-none' children='En savoir plus'/>
                                
                            </div>
                            </div>
                        </div>
                        <div id="services" className="bg-white w-full h-[35rem] flex flex-col px-16 my-10">
                            <SectionTitle className='font-semibold text-[#5B8C51] text-2xl mb-2' children='Services'/>
                            <div className="text-xl">Bénéficier des services tels que :</div>
                            <div id="content" className="flex flex-row items-center justify-center gap-64 py-20 w-full h-96">
                                
                                <Service className='h-56'src='/images/Poule1.jpg'>
                                    <p className="text-sm font-semibold">Service de vente et/ou d'achat</p>
                                    <p className="font-light text-md text-justify">Que vous soyez fermier ou acheteur, vendez et/ou acheter le produit de votre choix.</p>
                                </Service>
                                <Service className='h-56'src='/images/cow.png'>
                                    <p className="text-sm font-semibold">Canal de contact avec les Fermiers</p>
                                    <p className="font-light text-md text-justify">En tant qu’acheteur, écrivez à votre fournisseur de produits agricoles ou de ferme.</p>
                                </Service>
                                <Service className='h-56'src='/images/pouletBlanc.jpg'>
                                    <p className="text-sm font-semibold">Information</p>
                                    <p className="font-light text-md text-justify">Vous permettre de rester informé lorsque vos fourisseurs publient des noveaux produits.</p>
                                </Service>
                            </div>
                        </div>
                        <div id="product" className="bg-[#F2EEEE] w-full h-[45rem] flex flex-col justify-evenly px-16 mt-20">
                            <SectionTitle className='font-semibold text-[#5B8C51] text-2xl mb-2' children='Produits'/>
                            <div id="content" className="flex flex-row items-center justify-around py-20 w-auto h-96">
                            {someProducts.map((product:productProps) => (
                                <Product 
                                    key={product.key}
                                    classname="h-72 w-1/6 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col gap-5"
                                    productImage={product.productImage}
                                    productName={product.productName}
                                />))
                            }
                                {/* <Product classname='h-72 w-1/6 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col gap-5' productImage='https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886261/vache2_afeupe.jpg' productName='Vache'/>

                                <Product classname='h-72 w-1/6 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col gap-5' productImage='https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886260/goat1_qn1wzb.jpg' productName='Chèvre'/>
    
                                <Product classname='h-72 w-1/6 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col gap-5' productImage='https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886308/twoLapin_xcxvwm.jpg' productName='Lapin'/>

                                <Product classname='h-72 w-1/6 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col gap-5' productImage='https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886260/Canard1_j0iesq.jpg' productName='Canard'/>

                                <Product classname='h-72 w-1/6 drop-shadow-md shadow-black bg-white rounded-t-md flex flex-col gap-5' productImage='https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886261/pouletBlanc_wuf0ev.jpg' productName='Poulet'/> */}
                
                            </div>
                            <div id="sectionbtn">
                                <div id="learnMore" className=" w-72 flex gap-2 items-center">
                                    <a href="#" className="rounded-xl bg-[#404A3D] p-3 w-56 text-md text-[#FFC107] text-center font-normal shadow-lg shadow-black/50">En savoir plus</a>
                                    <a href="#" className="rounded-full border-2 border-[#5B8C51] w-10 h-10 text-[#5B8C51] shadow-lg shadow-black/50 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"/></svg></a>
                                </div>
                            </div>
                        </div>
                        <div id="writeUs" className="bg-[url('https://res.cloudinary.com/ddwgsvzlw/image/upload/v1734886261/goose_m2q4jt.png')] bg-no-repeat bg-center bg-cover w-full h-auto flex flex-col px-16 py-10 gap-10">
                            <SectionTitle className='font-semibold text-[#5B8C51] text-2xl mb-2' children='Laissez-nous un message'/>
                            <div id="content" className="w-full h-auto flex flex-row gap-20 items-center justify-center">
                                <form className="w-1/2 h-full p-10 flex flex-col gap-10" onSubmit={handleSendEmail}>
                                    <p>Sentez-vous libre de nous écrire.
                                    Nous vous rassurons que nous vous répondrons dès que possible.</p>
                                    <div id="content" className='h-auto flex flex-col gap-5'>
                                        <div id='userName'>
                                            <input className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' placeholder='Prenom et nom' type="text" name='userName'/>
                                        </div>
                                        <div id='emailAddress'>
                                            <input className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' placeholder='Adress email' type="email" name='emailAddress'/>
                                        </div>
                                        <div id='message'>
                                            <input className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' placeholder='Votre message'  type="text" name='message'/>
                                        </div>
                                        <input className='bg-[#404A3D] w-full h-12 text-[#FFC107] font-bold hover:cursor-pointer hover:text-[#404A3D] hover:border-[#404A3D] border-2 hover:bg-transparent hover:shadow-lg hover:rounded-md shadow-black' type="submit" value="Envoyer" />
                                    </div>
                                </form>
                                <div id="contact" className="bg-[#404A3D] h-3/4">
                                        <div id="deco" className="w-10 h-10 absolute -ml-5 -mt-5 bg-[#FFC107]"></div>
                                        <div id="deco" className="w-10 h-10 absolute mt-44 ml-[19rem] bg-[#FFC107]"></div>
                                        <div id="contact" className="w-1/5 h-full px-14 py-8 flex flex-col justify-start items-center  gap-8">
                                            <div id="title" className="self-stretch text-[#FFC107] text-xl font-extrabold font-['Roboto Serif'] text-center">Info</div>
                                            <div id="content" className="w-full flex flex-col gap-7">
                                                <a id="phone" href="#">
                                                    <div className="flex flex-row items-center gap-3">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg></span>
                                                        <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">+2438 2505 7845</div>
                                                    </div>
                                                </a>
                                                <a id="email" href="#">
                                                    <div className="flex flex-row items-center gap-3">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FEF3B8" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg></span>
                                                        <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] hover:text-[#FFC107] text-nowrap">contact.farmprod@gmail.com</div>
                                                    </div>
                                                </a>
                                                <div id="time" className="flex flex-row items-center gap-3">
                                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FEF3B8" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8.5-.207V6.97a.5.5 0 1 0-1 0v5.015a.5.5 0 0 0 .146.369l2.829 2.828a.5.5 0 1 0 .707-.707z" clip-rule="evenodd"/></svg></span>
                                                        <div className="text-[#FEF3B8] text-sm font-normal font-['Titillium Web'] text-nowrap">9h - 18h</div>
                                                    </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        
                </div>
            </MiddleSection> 
            <Footer/>
        </>
    )
}

export default LandingPage