import React from 'react'

interface SectionTitleProps{
    id?: string;
    className:string;
    children: JSX.Element | string
}

const SectionTitle: React.FC<SectionTitleProps> = ({id, className, children}) => {
    return (
        <div id={id}>
            <p className={className}>{children}</p>
            <div id='deco' className="flex flex-col gap-1 ">
                <div className="w-44 h-1 bg-[#EDDD5E]"></div>
                <div className="w-36 h-1 bg-[#EDDD5E]"></div>
            </div>
        </div>
    )
}

export default SectionTitle