import React, { useState } from 'react'
import Logo from '../logo/logo'

const Icon = ({ d, ...props }: React.SVGProps<SVGSVGElement> & { d: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d={d} />
  </svg>
)

interface sideNavProps{className:string}

export default function SideNav({className}:sideNavProps) {
    const [isFarmersOpen, setIsFarmersOpen] = useState(false)

    const farmers = ['Afia ndjema', 'Di dia dimpa', 'Kwetu mbali', 'Matondo', 'Ku dia mbote']

    return (
        <aside className={className}>
            <div className="mb-8">
                <Logo className="text-[#EDDD5E] font-bold text-3xl"/>
            </div>

            <nav className="flex flex-col gap-4 mb-8">
                <a href="#" className="flex items-center gap-3 text-[#F5E6C8] hover:bg-[#4A6741] p-2 rounded-md">
                <Icon d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" className="w-5 h-5" />
                <span>Acceuil</span>
                </a>
                
                <a href="#" className="flex items-center justify-between text-[#F5E6C8] hover:bg-[#4A6741] p-2 rounded-md">
                <div className="flex items-center gap-3">
                    <Icon d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" className="w-5 h-5" />
                    <span>Notification</span>
                </div>
                <span className="bg-green-500 text-white px-2 rounded-full text-sm">10</span>
                </a>
                
                <a href="#" className="flex items-center gap-3 text-[#F5E6C8] bg-[#666666]/30 p-2 rounded-md">
                <Icon d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" className="w-5 h-5" />
                <span>Produit</span>
                </a>
            </nav>

            <div className="flex-1">
                <button 
                    onClick={() => setIsFarmersOpen(!isFarmersOpen)}
                    className="flex items-center justify-between w-full text-[#F5E6C8] hover:bg-[#4A6741] p-2 rounded-md"
                    >
                    <div className="flex items-center gap-2">
                        <Icon d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" className="w-5 h-5" />
                        <span className="text-lg">Fermiers</span>
                    </div>
                    <Icon d="M6 9l6 6 6-6" className={`w-5 h-5 transition-transform duration-200 ${isFarmersOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`mt-2 space-y-2 overflow-hidden transition-all duration-200 ${isFarmersOpen ? 'max-h-60' : 'max-h-0'}`}>
                {farmers.map((farmer) => (
                    <button
                    key={farmer}
                    className="flex items-center gap-3 p-2 w-full text-[#F5E6C8] border border-[#666666]/30 rounded-md hover:bg-[#4A6741] transition-colors"
                    >
                    <Icon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" className="w-5 h-5" />
                    <span>{farmer}</span>
                    </button>
                ))}
                </div>
            </div>
        </aside>
    )
}

