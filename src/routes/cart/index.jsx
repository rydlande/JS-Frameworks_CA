import { useCartStore } from '../../stores'
import { Link } from 'react-router-dom'
import { CartCard } from '../../components';

export function Cart() {
  const { cart } = useCartStore((state) => state);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const totalDiscountedPrice = cart.reduce((total, product) => total + product.discountedPrice, 0);
  const totalDiscount = totalPrice - totalDiscountedPrice;

    return (
      <>
        <div className="mx-1 mt-28 md:mx-28">
          <nav className="text-xs mt-5 md:text-sm md:mb-7">
              <ol className="flex text-blue-400">
                <li className="mr-1.5">
                  <Link to="/">Home</Link>
                </li>
                <li>/</li>
                <li className="mx-1.5">
                  <Link to="/cart">Cart</Link>
                </li>
              </ol>
          </nav>  
          <h1 className="text-sm font-medium md:text-base mt-3">Cart</h1>
          <div className="container mt-1 mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-1">
              <CartCard />
            </div>
            <div className="w-full md:w-96 bg-white p-6 rounded-sm flex flex-col justify-around">
              <h3 className="text-base font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm md:text-base">
                <div className="flex justify-between md:flex-col">
                  <span className='md:text-sm md:font-light'>Sub Total</span>
                  <span>{totalPrice.toFixed(2)} NOK</span>
                </div>
                {totalDiscount > 0 && ( // This will only render if totalDiscount is greater than 0
                  <div className="flex justify-between md:flex-col">
                    <span className='md:text-sm md:font-light'>Discount</span>
                    <span>-{totalDiscount.toFixed(2)} NOK</span>
                  </div>
                )}
                <div className="flex justify-between md:flex-col">
                  <span className="md:text-sm md:font-light">Total</span>
                  <span className="font-semibold">{totalDiscountedPrice.toFixed(2)} NOK</span>
                </div>
              </div>
              <Link
                to={cart.length > 0 ? "/cart/success" : "#"}
                className={`block w-full border text-base border-blue-300 text-black text-center mt-6 py-2 rounded-sm ${cart.length > 0 ? 'hover:bg-blue-300 hover:text-white' : 'bg-blue-300 text-gray-700 cursor-not-allowed'}`}
                aria-disabled={cart.length === 0}
              >
              Proceed to Checkout
              </Link>
            </div>
          </div>      
        </div>
      </>
      
    )
  }