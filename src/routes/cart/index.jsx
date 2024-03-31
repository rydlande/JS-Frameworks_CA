import { useCartStore } from '../../stores'
import { Link } from 'react-router-dom'

export function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore((state) => state);

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const totalDiscountedPrice = cart.reduce((acc, curr) => acc + curr.discountedPrice, 0);
  const totalDiscount = totalPrice - totalDiscountedPrice;

  const handleCheckout = () => {
    clearCart();
  };

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
          <button onClick={handleCheckout}>
            Checkout
          </button>
          </Link>
        </div>
      </>
    )
  }