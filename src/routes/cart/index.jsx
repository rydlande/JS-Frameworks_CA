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
        <h1>Cart</h1>
        
        <CartCard />
        
        <div>
          <h3 className='line-through	'>Total Price: {totalPrice.toFixed(2)}</h3>
          <h3>Total Discounted Price: {totalDiscountedPrice.toFixed(2)}</h3>
          <h3>Total Discount: {totalDiscount.toFixed(2)}</h3>
          <Link to="/cart/success">
          <button>Checkout</button>
          </Link>
        </div>
      </>
    )
  }
  