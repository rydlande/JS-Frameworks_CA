import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../stores";

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
         {order.map((product) => (
           <div key={product.id}>
             <img src={product.image.url} alt={product.title} />
             <h2>{product.title}</h2>
             <p>Quantity: {product.quantity}</p>
             <p>Price: {product.price}</p>
           </div>
         ))}
         <Link to="/">
          <p>Back to home page</p>
         </Link>
       </>
     )
   }