import React from 'react'
import { Link } from 'react-router-dom';

export interface farmProps{
    key?: string;
    to:string;
    classname:string;
    farmImage:string;
    enterpriseName:string;
    enterpriseLocation?:string;
    workField?:string
}

export const Farm: React.FC<farmProps> = ({key, to, classname, farmImage, enterpriseName}) => {
    return (
    
                <Link
                    key={key} to={to}
                    className={classname}>
                    <img src={farmImage} alt={enterpriseName} className='w-10 h-10 rounded-full border-2 border-black'/>
                    <span>{enterpriseName}</span>
                </Link>
    )
}