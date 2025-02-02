import { XMarkIcon } from '@heroicons/react/24/outline'
import useStore from '../../store/zustand';

export interface ProductInBasketProps {
  name: string;
  image: string;
  quantity: number;
  weight: string;
  gender: string;
  age: string;
  price: string;
  id: string;
  productName: string;
  productImage: string;
  productId: string;
}
export interface ProductInBasketProp {
  name: string;
  image: string;
  quantity: number;
  weight: string;
  gender: string;
  age: string;
  price: string;
  id: string;
}

export default function ProductInBasket({name,image,quantity,weight,gender,age,price,id}: ProductInBasketProp){
  const {removeData} = useStore()
  return (
    <div className="w-auto h-auto flex flex-row items-start gap-10 bg-[#C7DDB5] p-4 rounded-lg mb-8">
      <div id='productImage' className="w-32 h-32 flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div id='details' className="flex flex-col items-end gap-10 justify-center h-32 w-auto">
        <div className="flex justify-between items-start">
          {/* Animal Details */}
          <div className="flex flex-col w-auto">
            <div className="flex items-center gap-7 mb-4">
              <h2 className="text-xl font-semibold text-gray-700 mr-2">{name}</h2>
              <div id='quant' className="flex items-center gap-2">
                <span className="text-gray-600">Quantité</span>
                <span className="bg-gray-400 px-2 py-1 rounded text-white">{quantity}</span>
              </div>

              <div id='weight' className="flex items-center gap-2">
                <span className="text-gray-600">Poids</span>
                <span className="bg-gray-400 px-2 py-1 rounded text-white">{weight}</span>
              </div>

              <div id='gender' className="flex items-center gap-2">
                <span className="text-gray-600">Genre</span>
                <span className="bg-gray-400 px-2 py-1 rounded text-white">{gender}</span>
              </div>

              <div id='age' className="flex items-center gap-2">
                <span className="text-gray-600">Age</span>
                <span className="bg-gray-400 px-2 py-1 rounded text-white">{age}</span>
              </div>

              <span id='price' className="bg-gray-400 px-2 py-1 rounded text-white ml-2">
                {price}
              </span>
            </div>
            <p id='descript' className="text-gray-600 text-sm">
              It is a long established fact that a reader.
            </p>
          </div>

        </div>
        <button 
            onClick={() => removeData(Number(id))}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
      </div>
    </div>
  )
}

