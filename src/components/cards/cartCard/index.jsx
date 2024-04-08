import { useCartStore } from "../../../stores";
import { Link } from 'react-router-dom';

export function CartCard() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore((state) => state);

  return (
      <div>
        {cart.map((product) => (
          <div key={product.id} className="flex my-3 justify-center">
            <Link to={`/shop/${product.id}`} className="w-24 h-24 md:w-32 md:h-32">
              <img src={product.image.url} alt={product.title} className="w-full h-full object-cover rounded-sm" />
            </Link>

            <div className="flex flex-col justify-between ml-2 my-2 w-56 md:w-56 md:my-3 md:ml-4">
                <Link to={`/shop/${product.id}`} className="text-sm font-medium md:text-base">{product.title}</Link>

                <p className="text-xs mr-1 md:text-sm">{product.discountedPrice.toFixed(2)} NOK</p>
                {product.price > product.discountedPrice && (
                  <p className="text-xs md:text-sm line-through text-light mb-1">{product.price.toFixed(2)} NOK</p>
                )}

              <div className="flex justify-between items-center mr-7">
                <button 
                  onClick={() => decreaseQuantity(product.id)}
                  className="px-2 py-0 font-medium rounded-sm hover:bg-light"
                >-</button>
                <p className="font-light text-xs md:text-sm">{product.quantity} item(s)</p>
                <button 
                  onClick={() => increaseQuantity(product.id)}
                  className="px-2 py-0 rounded-sm hover:bg-light"
                >+</button>

                <button 
                  onClick={() => removeFromCart(product.id)}
                  className="text-light hover:text-dark text-xs md:text-sm"
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