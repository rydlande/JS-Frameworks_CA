export { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export function Products() {
  const url = 'https://v2.api.noroff.dev/online-shop/'
  const [productList, setProductList] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setProductList(data.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

    return (
      <>
      <div className='flex flex-wrap justify-center cursor-default xl:mx-5 2xl:mx-10'>

        {productList ? productList.map((product) => {
          return (
              <div className="flex flex-col items-center object-contain cursor-default w-36 my-2 mx-0.5 rounded-sm md:w-56 md:my-4 md:mx-2 lg:w-72 lg:my-6 lg:mx-4x lg:rounded-lg">
                <div className='flex items-center justify-center h-40 w-32 md:h-60 md:w-52 lg:h-72 lg:w-64'>
                  <img 
                    src={product.image.url} 
                    alt={product.title} 
                    className="block m-auto object-cover rounded-sm max-h-40 max-w-32 md:max-h-60 md:max-w-52 lg:max-h-72 lg:max-w-64 lg:rounded-lg"/>
                </div>
                <h2 className='sfont-semibold text-center text-base mt-4 md:text-xl md:mt-6 lg:text-3xl lg:mt-8'>{product.title}</h2>
                <p className='font-light text-sm mt-3 md:text-base md:mt-4 lg:text-2xl lg:mt-6'>{product.discountedPrice} NOK</p>

                <Link to={`/shop/${product.id}`} key={product.id}>
                <button className='flex italic items-center cursor-pointer text-xs mt-1 mb-10 md:text-sm md:mt-1.5 md:mb-12 lg:text-xl lg:mt-2 lg:mb-16'>
                  View product
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-3 h-3 ml-0.5 lg:w-5 lg:h-6 lg:ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
                </Link>
              </div>
          )

        }) : (
          <p>Error</p>
        )}

      </div>
      </>
    )
}