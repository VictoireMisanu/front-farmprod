
import React from 'react'

interface middleSectionProps{ children:JSX.Element | JSX.Element[]}


export const MiddleSection: React.FC<middleSectionProps> = ({children}) => {
    return (
        <div className="w-full h-auto flex flex-col gap-10">
                {children}
        </div>
    )
}


export default MiddleSection