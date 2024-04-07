import { useCartStore } from "../../../stores.js";

export function SpecificCard({ product }) {
    const { cart, addToCart } = useCartStore((state) => state);

    console.log(cart)
    const handleAddToCart = () => {
        addToCart(product);
      }

      const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span key={i} className={`${i <= rating ? 'text-blue-300' : 'text-gray-200'} text-xs lg:text-lg`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 lg:w-4 lg:h-4">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
              </svg>            
            </span>
          );
        }
        return stars;
      };

    return (
        <>
          {product ? ( 
            <div key={product.id}>
              <div className="hidden md:block mt-44">
                <div className="flex flex-row mt-10 justify-center">
                  <div className="relative w-1/2 flex justify-center items-center">
                    <img 
                      src={product.image.url} 
                      alt="blurred background image of product"
                      className="absolute w-[350px] h-[450px] object-cover blur xl:w-[500px] xl:h-[400px]"
                    />
                    <img 
                      src={product.image.url} 
                      alt={product.title} 
                      className="relative z-10 object-cover w-52 h-64 rounded-sm shadow-card xl:w-80 xl:h-64"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col px-10">
                    <h1 className="text-2xl font-semibold uppercase">{product.title}</h1>
                    <div className="flex mt-3 items-center">
                      {renderStars(product.rating)}
                      <span className="text-sm ml-1">({product.reviews.length})</span>
                    </div>

                    <p className="text-sm font-light mt-4">{product.description}</p>

                    <div className="flex justify-between items-center mt-8 max-w-80">
                      <div className="flex flex-col mt-8">
                        {product && product.discountedPrice < product.price ? (
                          <>
                            <p className="font-medium">{product.discountedPrice} NOK</p>
                            <p className="font-light italic line-through text-sm text-gray-500">{product.price} NOK</p>
                          </>
                        ) : (
                          <p className="text-base">{product.price} NOK</p>
                        )}
                      </div>

                      <button 
                        onClick={handleAddToCart}
                        className="text-sm font-light border-2 border-blue-200 hover:bg-blue-300 text-black hover:text-white py-1.5 px-3 rounded-sm mt-8"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-44 flex justify-center">
                  <div className="w-[500px]">
                    <h2 className="font-medium">Reviews</h2>
                    {product.reviews.map((review) => (
                      <div key={review.id} className="p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 mt-3">
                        <p className="text-sm font-medium">{review.username}</p>
                        <div className="flex items-center mt-0.5">
                          {renderStars(review.rating)} 
                        </div>
                        <p className="text-xs mt-3.5">{review.description}</p>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

              <div className="lg:hidden flex flex-col">
                <img 
                  src={product.image.url} 
                  alt="blurred background image of product"
                  className="absolute w-full h-72 object-cover blur" 
                />
                <div className="flex flex-col justify-center mx-7">
                  <img 
                    src={product.image.url} 
                    alt={product.title} 
                    className="relative z-10 m-auto object-cover rounded-sm w-40 h-52 mt-8 shadow-card"
                  />

                  <div>
                    <h1 className="text-lg font-semibold mt-24 uppercase ">{product.title}</h1>
                    
                    <div className="flex items-center mt-0.5">
                      {renderStars(product.rating)}
                      <span className="text-xs ml-1">({product.reviews.length})</span>
                    </div>

                    <p className="text-xs max-w-48 font-light mt-1.5">{product.description}</p>

                    <div className="flex flex-col mt-8">
                      {product && product.discountedPrice < product.price ? (
                        <>
                          <p className="font-medium">{product.discountedPrice} NOK</p>
                          <p className="font-light italic line-through text-sm text-gray-500">{product.price} NOK</p>
                        </>
                      ) : (
                        <p className="text-base">{product.price} NOK</p>
                      )}
                    </div>

                    <div className="flex justify-center">
                      <button 
                        onClick={handleAddToCart}
                        className="text-sm font-light border-2 border-blue-200 hover:bg-blue-300 text-black hover:text-white py-1.5 px-3 rounded-sm mt-8"
                      >
                        Add to cart
                      </button>
                    </div>

                    <div className="mt-8">
                      <div>
                        <h2 className="font-medium">Reviews</h2>
                        {product.reviews.map((review) => (
                          <div key={review.id} className="p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 mt-3">
                            <p className="text-sm font-medium">{review.username}</p>
                            <div className="flex items-center mt-0.5">
                              {renderStars(review.rating)}
                            </div>
                            <p className="text-xs mt-3.5">{review.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            
          ) : (
            <p>Error</p>
          )}
        </>
    )
}