import { useCartStore } from "../../../stores";

export function CartCard() {
    const { cart, removeFromCart } = useCartStore((state) => state);


    return (
        <>
            {cart.map((product) => (
            <div key={product.id}>
              <img src={product.image.url} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Discounted Price: {product.discountedPrice}</p>
              <p>Discount: {product.price - product.discountedPrice}</p>
              <button onClick={(() => {removeFromCart(product.id)})}>Remove from cart</button>
            </div>
          ))}
        </>
    )
}