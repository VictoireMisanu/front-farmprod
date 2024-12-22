import React from 'react'

interface serviceProps{
    className:string;
    children : JSX.Element []| string
    src : string;
}

const Service: React.FC<serviceProps> = ({className, children, src}) => {
    return (
        <div id="service1" className={className}>
            <div id="picture" className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white shadow-2xl border-none ml-10 shadow-black">
                <img src={src} alt="" className="w-3/4 h-3/4  rounded-full flex items-center justify-center "/>
            </div>
            <div id="text" className="w-72 h-60 shadow-lg shadow-black/30 absolute -mt-10 pt-16 px-10 flex flex-col gap-2">
                {children}
            </div>
        </div>
    )
}

export default Service