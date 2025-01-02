import React from 'react'

export interface productProps{
    key?: string;
    classname:string;
    productImage:string;
    productName:string;
    productPrice?:number;
}

export const Product: React.FC<productProps> = ({key, classname, productImage, productName}) => {
    return (
        
        <div key={key} className={classname}>
            <div id="part1" className="w-full h-3/5 rounded-sm flex items-center justify-center">
                <img src={productImage} className="w-full h-full  rounded-sm flex items-center justify-center "/>
            </div>
            <div id="part2" className="flex flex-col px-5 gap-5 h-2/5">
                <p id="productName" className="text-md text-[#404A3D] font-semibold">{productName}</p>
                <a href="#" className="w-32 h-8 rounded-md text-md bg-[#404A3D] text-white text-center font-normal  flex items-center justify-center hover:bg-[#5B8C51] hover:text-white hover:border-none">Commander</a>
            </div>
            
    </div>
    
    )
}