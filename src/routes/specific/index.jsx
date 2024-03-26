import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useCartStore } from "../../stores.js";

export function Specific() {
  const {id} = useParams();
  const { cart, addToCart, removeFromCart } = useCartStore((state) => state);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(cart)

  useEffect(() => {
    async function fetchData() {
    try {
      const res = await fetch ('https://v2.api.noroff.dev/online-shop/' + id)
      const data = await res.json()
      setProduct(data.data)
      setLoading(false)
      console.log(data)
    }
    catch (error) {
      console.log(error)
      setLoading(false)
    }}
    fetchData();
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Specific</h1>
      <p>{id}</p>
      {product ? ( 
          <div key={product.id}>
            <p>{product.title}</p>
            <button onClick={(() => {addToCart(product)})}>click me</button>
          </div>
        ) : (
        <p>Error</p>
      )}
    </>
  )
}