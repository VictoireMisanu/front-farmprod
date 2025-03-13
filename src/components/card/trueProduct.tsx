import type React from "react"
import { Link } from "react-router-dom"
// import { Star } from "lucide-react"

export interface ProductProps {
  className: string
  src: string
  name: string
  descript: string
  price: string
  to: string
  // rating: number
  category?: number
}

const TrueProduct: React.FC<ProductProps> = ({ className, src, name, descript, price, to }) => {
  return (
    <div className={className}>
      <Link to={to}>
        <img src={src || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover mb-4 rounded" />
      </Link>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      {/* <div className="flex items-center mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          />
        ))}
    
      </div> */}
      <p className="flex-grow text-sm mb-4">{descript}</p>
      <div className="flex justify-between items-center">
        <span className="bg-[#4A6741] text-white px-3 py-1 rounded">{price}</span>
        <button className="bg-[#4A6741] text-white p-2 rounded">
          <img src="/svg/whiteBasket.svg" alt="Add to basket" />
        </button>
      </div>
    </div>
  )
}

export default TrueProduct

