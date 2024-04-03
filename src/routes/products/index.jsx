export { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ProductsCard } from "../../components";

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
        <ProductsCard productList={productList} />
      </div>
      </>
    )
}