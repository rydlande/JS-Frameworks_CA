import { useCartStore } from "../../../stores";
import { Link } from 'react-router-dom';

export function CartCard() {
  const { cart, removeFromCart } = useCartStore((state) => state);

  return (
      <div>
        {cart.map((product) => (
          <div key={product.id} className="flex bg-white my-3 rounded-sm">
            <Link to={`/shop/${product.id}`} className="w-24 h-24 md:w-32 md:h-32">
              <img src={product.image.url} alt={product.title} className="w-full h-full object-cover rounded-sm" />
            </Link>

            <div className="flex flex-col justify-between ml-2 my-2 w-56 md:w-48 md:my-3 md:ml-4">
              <div>
                <Link to={`/shop/${product.id}`} className="text-sm font-medium md:text-base">{product.title}</Link>

                <p className="text-xs mr-1 md:text-sm">{product.discountedPrice.toFixed(2)} NOK</p>
                {product.price > product.discountedPrice && (
                  <p className="text-xs md:text-sm line-through text-gray-400 mb-1">{product.price.toFixed(2)} NOK</p>
                )}
              </div>

              <div className="flex justify-between mr-4">
                <p className="font-light text-xs md:text-sm mr-2">{product.quantity} item(s) </p>
                <button 
                  onClick={() => removeFromCart(product.id)}
                  className="text-pink-300 hover:text-pink-500 text-xs md:text-sm lg:hover:text-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}