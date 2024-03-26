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
        console.log(data)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p>  //<Skeleton />
  }

    return (
      <>
      {productList ? productList.map((product) => {
        return (
          <Link to={`/shop/${product.id}`} key={product.id}>
            <div className="productCard">
              <img src={product.image.url} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price.formatted}</p>
            </div>
          </Link>
        )
      }) : (
        <p>Error</p>
      )}
        
      </>
    )
}