import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { SpecificCard, SpecificSkeleton } from "../../components";

export function Specific() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
    try {
      setTimeout(async () => {
      const res = await fetch ('https://v2.api.noroff.dev/online-shop/' + id)
      const data = await res.json()
      setProduct(data.data)
      setLoading(false)
    }, 1000);
    }
    catch (error) {
      console.log(error)
      setLoading(false)
    }}
    fetchData();
  }, [id])


  if (loading) {
    return <SpecificSkeleton />;
  }

  return (
    <>
      <div className='mx-1 mt-28 lg:mx-24 bg-white'>
      <nav className="text-xs mt-5 lg:text-sm lg:mb-7">
          <ol className="flex text-dark">
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
      </div>

      <div className="mx-0 mt-10 lg:mx-28">
        <SpecificCard product={product} />
      </div>
    </>
  )
}