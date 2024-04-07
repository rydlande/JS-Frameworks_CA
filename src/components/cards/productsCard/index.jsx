import { Link } from "react-router-dom"

export function ProductsCard({ products }) {

    return (
        <>
        {products ? products.map((product) => { //hver gang man bruker map, så skal du ha key på øverste element i map func
          return (
            <Link to={`/shop/${product.id}`} key={product.id} >
              <div className="flex flex-col w-36 mx-1 mb-6 md:w-56 md:my-4 md:mx-2 lg:w-72 lg:my-6 lg:mx-4x lg:rounded-lg">
                <img 
                  src={product.image.url} 
                  alt={product.title} 
                  className="block m-auto object-cover rounded-sm w-36 h-44 md:max-h-60 md:max-w-52 lg:max-h-72 lg:max-w-64 lg:rounded-lg"/>
                <h2 className='sfont-semibold text-sm mt-1 md:text-base md:mt-6 lg:text-3xl lg:mt-8'>{product.title}</h2>
                <p className='font-light text-xs mt-0 md:text-base md:mt-4 lg:text-2xl lg:mt-6'>{product.discountedPrice} NOK</p>
              </div>
            </Link>
          )

        }) : (
          <p>Error</p>
        )}
        </>
    )
}