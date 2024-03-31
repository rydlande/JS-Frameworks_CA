import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useCartStore } from "../../stores.js";

export function Specific() {
  const { id } = useParams();
  const { addToCart } = useCartStore((state) => state);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchData() {
    try {
      const res = await fetch ('https://v2.api.noroff.dev/online-shop/' + id)
      const data = await res.json()
      setProduct(data.data)
      setLoading(false)
    }
    catch (error) {
      console.log(error)
      setLoading(false)
    }}
    fetchData();
  }, [])

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity > 1 ? prevQuantity - 1 : 1);
  };
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };


  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <nav className="text-xs mt-5">
        <ol className="flex text-violet-400">
          <li className="mr-1.5">
            <Link to="/">Home</Link>
          </li>
          <li>/</li>
          <li className="mx-1.5">
            <Link to="/shop">Shop All</Link>
          </li>
          <li>/</li>
          <li className="mx-1.5">
            {product.title}
          </li>
        </ol>
      </nav>

      {product ? ( 
          <div key={product.id} className="flex flex-col mx-7 mt-5">
            <img 
              src={product.image.url} 
              alt={product.title} 
              className="block m-auto object-cover rounded-sm max-h-56 max-w-64 md:max-h-80 md:max-w-64 lg:max-h-96 lg:max-w-72 lg:rounded-lg"
            />
            <h1 className="text-center text-xl font-semibold mt-4">{product.title}</h1>

            <div className="flex flex-col items-end mt-4">
              {product && product.discountedPrice < product.price ? (
                <>
                  <p className="text-base text-violet-400">{product.discountedPrice} NOK</p>
                  <p className="italic line-through text-sm">{product.price} NOK</p>
                </>
              ) : (
                <p className="text-base">{product.price} NOK</p>
              )}
            </div>

            <p className="text-xs mt-8">Description:</p>
            <p className="text-sm">{product.description}</p>

            <div className="quantity-selector mt-7 flex justify-center items-center">
              <button onClick={decrementQuantity} className="mr-5 text-medium text-2xl">
                -
              </button>
              <span className="text-sm px-2 py-0.5">{quantity}</span>
              <button onClick={incrementQuantity} className="ml-5 text-medium text-xl">
                +
              </button>
            </div>

          <button 
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Add to cart
          </button>

            {product.reviews && product.reviews.length > 0 && (
            <div>
              <h2>Reviews</h2>
              {product.reviews.map((review) => (
                <div key={review.id}>
                  <p>{review.username}: {review.description}</p>
                  <p>Rating: {review.rating}</p>
                </div>
              ))}
            </div>
          )}
          </div>
        ) : (
        <p>Error</p>
      )}
    </>
  )
}