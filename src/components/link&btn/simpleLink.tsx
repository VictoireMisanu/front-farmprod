import React from 'react'
import { Link } from 'react-router-dom'

interface simpleLinkProps{
    to:string;
    className:string;
    id?:string;
    children:JSX.Element | string;
}

const SimpleLink: React.FC<simpleLinkProps> = ({to, className, id, children}) => {
    return (
        <>
            <Link to={to} className={className} id={id} children={children}/>
        </>
    )
}

export default SimpleLink