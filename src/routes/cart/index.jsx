import { useCartStore } from '../../stores'
import { Link } from 'react-router-dom'
import { CartCard } from '../../components';

export function Cart() {
  const { cart } = useCartStore((state) => state);

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const totalDiscountedPrice = cart.reduce((total, product) => total + product.discountedPrice * product.quantity, 0);
  const totalDiscount = totalPrice - totalDiscountedPrice;

  if (cart.length === 0) {
    return (
      <div className="mx-1 mt-28 md:mx-28 flex flex-col items-center justify-center">
        <p className="text-lg font-medium">Oops, nothing here...</p>
        <Link to="/shop" className="mt-4 border border-light hover:bg-dark hover:text-white py-2 px-4 rounded-sm">
          Browse our shop
        </Link>
      </div>
    );
  }

    return (
      <>
        <div className="mx-1 mt-28 lg:mx-24 bg-white">
          <nav className="text-xs mt-5 lg:text-sm lg:mb-7">
              <ol className="flex text-dark">
                <li className="mx-1.5">
                  <Link to="/">Home</Link>
                </li>
                <li>/</li>
                <li className="mx-1.5">
                  <Link to="/cart">Cart</Link>
                </li>
              </ol>
          </nav>  
          <h1 className="text-sm font-medium mx-2 md:text-base mt-3">Cart</h1>
          <div className="container mt-1 mx-auto flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8">
            <div className="flex-1">
              <CartCard />
            </div>
            <div className="w-full p-6 flex flex-col justify-around md:w-96">
              <h3 className="text-base font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm md:text-base">
                <div className="flex justify-between md:flex-col">
                  <span className='md:text-sm md:font-light'>Sub Total</span>
                  <span>{totalPrice.toFixed(2)} NOK</span>
                </div>
                {totalDiscount > 0 && (
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
                className={`block w-full border text-base border-light text-black text-center mt-6 py-2 rounded-sm ${cart.length > 0 ? 'hover:bg-dark hover:text-white' : 'bg-light text-dark cursor-not-allowed'}`}
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