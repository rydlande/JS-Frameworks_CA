import { useEffect } from 'react';
import { useCartStore } from '../../stores'
import { Link } from 'react-router-dom'

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore((state) => state);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const totalDiscountedPrice = cart.reduce((total, product) => total + product.discountedPrice, 0);
  const totalDiscount = totalPrice - totalDiscountedPrice;

    return (
      <>
        <h1>Cart</h1>
        
          {cart.map((product) => (
            <div key={product.id}>
              <img src={product.image.url} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Discounted Price: {product.discountedPrice}</p>
              <p>Discount: {product.price - product.discountedPrice}</p>
              <button onClick={(() => {removeFromCart(product.id)})}>Remove from cart</button>
            </div>
          ))}
        
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
  