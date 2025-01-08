import React, { useState, useEffect} from 'react'
import Logo from '../logo/logo'
import { getFarms } from '../services/api';
// import { BtnIcon } from '../link&btn/btnIcon';
import { Farm, farmProps } from '../card/farm';

const Icon = ({ d, ...props }: React.SVGProps<SVGSVGElement> & { d: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d={d} />
  </svg>
)

interface sideNavProps{className:string}

export default function SideNav({className}:sideNavProps) {
    const [isFarmersOpen, setIsFarmersOpen] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [farms, setFarms] = useState([]);
    useEffect(() => {
        const fetchFarms = async () => {
        try {
            const dataFarm = await getFarms();
            setFarms(dataFarm);
            setLoading(false);

            
        } catch (err: unknown) {
            const errorMessage = err instanceof Error 
              ? `Erreur lors du chargement des fermiers: ${err.message}`
              : 'Erreur lors du chargement des fermiers';
            setError(errorMessage);
            setLoading(false);
          }
        };

        fetchFarms();
        
    }, []);
    
    if (loading) return <div className="text-center">Chargement...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    
    return (
        <aside className={className}>
            <div className="mb-8">
                <Logo className="text-[#EDDD5E] font-bold text-3xl"/>
            </div>

            <nav className="flex flex-col gap-4 mb-8 h-auto">
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

            <div className="flex-1 h-auto">
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
                
                <div className={`h-auto mt-2 space-y-2 overflow-hidden transition-all duration-200 ${isFarmersOpen ? 'max-h-auto' : 'max-h-0'}`}>
                {farms.map((farm:farmProps) => (
                
                    <Farm key={farm.key} to='#' classname='flex items-center gap-3 p-2 w-full text-[#F5E6C8] border border-[#666666]/30 rounded-md hover:bg-[#4A6741] transition-colors' farmImage={farm.farmImage} enterpriseName={farm.enterpriseName}/>
                ))}
                </div>
            </div>
        </aside>
    )
}
