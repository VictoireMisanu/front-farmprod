import React from 'react'

interface productProps{
    id?: string;
    classname:string;
    src:string;
    children : JSX.Element;
}

export const Product: React.FC<productProps> = ({id, classname, src, children}) => {
    return (
        
        <div id={id} className={classname}>
            <div id="part1" className="w-full h-3/5 rounded-sm flex items-center justify-center">
                <img src={src} className="w-full h-full  rounded-sm flex items-center justify-center "/>
            </div>
            <div id="part2" className="flex flex-col px-5 gap-5 h-2/5">
                {children}
            </div>
            
    </div>
    
    )
}