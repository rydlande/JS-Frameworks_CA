import { Link } from "react-router-dom";

export function CheckoutSuccess() {
     return (
       <>
         <h1>Checkout Success</h1>
         <p>Thank you for your purchase!</p>
         <p>Your order is on its way.</p>
         <Link to="/">
          <p>Back to home page</p>
         </Link>
       </>
     )
   }