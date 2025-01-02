import React from 'react'
import { Link } from 'react-router-dom';

export interface productProps{
    className:string;
    src:string,
    name:string,
    descript:string,
    price:string,
    to:string
}

const TrueProduct: React.FC<productProps> = ({className, src, name, descript, price, to}) => {
    return (
        <div className={className}>
                                    <Link to={to}>
                                        <img 
                                            src={src}
                                            alt={name} 
                                            className="w-full h-48 object-cover mb-4 rounded"
                                        />
                                    </Link>
                                    <h3 className="text-xl font-semibold mb-2">{name}</h3>
                                    <p className="flex-grow text-sm mb-4">{descript}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="bg-[#4A6741] text-white px-3 py-1 rounded">{price}</span>
                                        <button className="bg-[#4A6741] text-white p-2 rounded">
                                            <img src="/svg/whiteBasket.svg" alt="" />
                                        </button>
                                    </div>
                                <div/>
                                
                                
                                </div>
    )
}

export default TrueProduct