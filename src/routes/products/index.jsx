import { Link } from 'react-router-dom';
import { ProductsCard } from "../../components";
import { useProductStore } from '../../stores';
import { ProductsSkeleton } from '../../components'


export function Products() {
  const { products, loading } = useProductStore(state => ({ products: state.products, loading: state.loading }));

  if (loading) {
    return <ProductsSkeleton />;
  }
    return (
      <>
      <div className='mx-1 mt-28 lg:mx-24 bg-white'>
        <nav className="text-xs mt-5 lg:text-sm lg:mb-7">
          <ol className="flex text-dark">
            <li className="mx-1.5">
              <Link to="/">Home</Link>
            </li>
            <li>/</li>
            <li className="mx-1.5">
              <Link to="/shop">Shop All</Link>
            </li>
          </ol>
        </nav>
        <div className='flex flex-wrap justify-center mt-5'>
          <ProductsCard products={products} />
        </div>
      </div>
      </>
    )
}