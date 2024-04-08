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
  }, []);

  return (
    <div className='flex flex-col items-center justify-center py-10 mt-12'>
      <div className="w-full max-w-md p-4 bg-white rounded-lg text-center">
        <h1 className="font-medium text-xl mb-4">Checkout Success</h1>
        <p className="text-sm mb-4">Thank you for your purchase!</p>
        <p className="text-sm mb-8">Your order is soon on its way.</p>
        <p className="text-sm mb-4">Order details:</p>

        <CheckoutSuccessCard order={order}/>

        <Link to="/shop" className="mt-8 inline-block border border-light px-4 py-2 rounded-sm hover:bg-dark hover:text-white">
          Back to shop
        </Link>
      </div>
    </div>
  );
}
