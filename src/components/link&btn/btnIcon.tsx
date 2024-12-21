import React from 'react'
import { Link } from 'react-router-dom';

interface BtnIconProps{
    to:string;
    className:string;
    children:JSX.Element [] | string;
}


export const BtnIcon: React.FC<BtnIconProps> = ({to, className, children}) => {
    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    )
}