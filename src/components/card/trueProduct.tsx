import React from 'react'

interface productProps{
    className:string;
    src:string,
    name:string,
    descript:string,
    price:string
}

const TrueProduct: React.FC<productProps> = ({className, src, name, descript, price}) => {
    return (
        <div className={className}>
            <div id="image" className="bg-[#1D2E28] w-full h-48 flex justify-center">
                <img src={src} alt="test de l'électrophorèse" className="w-full h-full"/>
            </div>
            <div id="text" className="text flex flex-col gap-3 w-full h-44 bg-[#C7DDB5] px-5 pb-10">
                <div id="title&price" className="w-full h-auto flex flex-row justify-between items-center border-black border-b-[1px] py-3">
                    <p className="font-bold text-xl text-[#1D2E28]">{name}</p>
                    <p className="w-auto h-auto bg-[#658221] text-white font-bold rounded-lg p-1 flex items-center justify-center">{price}</p>
                </div>
                <p className="text-[0.9rem] text-justify">{descript}</p>
                <div id="basket" className="w-full h-auto flex flex-row justify-end">
                    <img src="/svg/whiteBasket.svg" alt="" className="bg-[#658221] w-10 h-10 p-1 flex justify-center items-center rounded-md"/>
                </div>
            </div>
        </div>
    )
}

export default TrueProduct