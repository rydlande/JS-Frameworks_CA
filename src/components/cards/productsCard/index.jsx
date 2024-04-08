import { Link } from "react-router-dom"

export function ProductsCard({ products }) {
    return (
        <>
        {products ? products.map((product) => {
          return (
            <Link to={`/shop/${product.id}`} key={product.id} >
              <div className="flex flex-col w-36 mx-1 mb-7 md:mx-2 lg:w-56 lg:mx-5 lg:mb-11">
                <img 
                  src={product.image.url} 
                  alt={product.title} 
                  className="block m-auto object-cover rounded-sm w-36 h-48 lg:w-60 lg:h-80"/>
                <h2 className='font-normal text-sm mt-1 lg:font-medium lg:text-lg lg:mt-2'>{product.title}</h2>
                <p className='font-light text-xs mt-0.5 lg:text-base'>{product.discountedPrice} NOK</p>
              </div>
            </Link>
          )
        }) : (
          <p>Error</p>
        )}
        </>
    )
}