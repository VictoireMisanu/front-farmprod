import React from 'react'
import { Link } from 'react-router-dom'

interface simpleLinkProps{
    to:string;
    className:string;
    children:JSX.Element | string;
}

const SimpleLink: React.FC<simpleLinkProps> = ({to, className, children}) => {
    return (
        <>
            <Link to={to} className={className} children={children}/>
        </>
    )
}

export default SimpleLink