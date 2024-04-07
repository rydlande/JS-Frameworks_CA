import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../stores";
import { CheckoutSuccessCard } from "../../components";

export function CheckoutSuccess() {
  const { cart, clearCart } = useCartStore((state) => state);
  const [order, setOrder] = useState([]);
  
  useEffect(() => {
    setOrder(cart);
    clearCart();
  }, [])


     return (
       <>
        <div className='mx-1 mt-28 lg:mx-28 flex flex-col items-center'>
          <div className="mb-4 text-center">
            <h1 className="font-medium text-xl">Checkout Success</h1>
            <p className="mt-2 text-sm">Thank you for your purchase!</p>
            <p className="text-sm">Your order is soon on it's way.</p>
          </div>

          <div>
            <p className="mt-8 text-sm text-center">Order details:</p>
            <CheckoutSuccessCard  order={order}/>
          </div>

          <Link to="/" className="border border-pink-300 px-2 py-1.5 hover:bg-pink-300 hvoer:text-black mt-8">
            <p className="text-sm">Back to home page</p>
          </Link>
        </div>
         
       </>
     )
   }