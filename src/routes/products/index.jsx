import { Link } from 'react-router-dom';
import { ProductsCard } from "../../components";
import { useProductStore } from '../../stores';
import { ProductsCardSkeleton } from '../../components/skeletons/productsCard.jsx'


export function Products() {
  const { products, loading } = useProductStore(state => ({ products: state.products, loading: state.loading }));

  if (loading) {
    return <ProductsCardSkeleton />;
  }

    return (
      <>
      <div className='mx-1 mt-28 lg:mx-28'>
        <nav className="text-xs mt-5 lg:text-sm lg:mb-7">
          <ol className="flex text-pink-400">
            <li className="mr-1.5">
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