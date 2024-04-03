import { useCartStore } from "../../../stores.js";

export function SpecificCard({ product }) {
    const { cart, addToCart } = useCartStore((state) => state);

    const handleAddToCart = () => {
        addToCart(product);
      }

    return (
        <>
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