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
         <h1>Checkout Success</h1>
         <p>Thank you for your purchase!</p>
         <p>Your order is on its way.</p>
         
         <CheckoutSuccessCard  order={order}/>

         <Link to="/">
          <p>Back to home page</p>
         </Link>
       </>
     )
   }