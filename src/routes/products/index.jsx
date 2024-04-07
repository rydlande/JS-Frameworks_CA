export { Link } from 'react-router-dom';
import { ProductsCard } from "../../components";
/* import { Loader } from '../../components';
 */import { useProductStore } from '../../stores';


export function Products() {
  const { products, loading } = useProductStore(state => ({ products: state.products, loading: state.loading }));

  if (loading) {
    return <p>Loading...</p>;
  }

    return (
      <>
      <div className='mx-1'>
      {/* <Loader /> */}
        <div className='flex flex-wrap justify-center mt-28'>
          <ProductsCard products={products} />
        </div>
      </div>
      </>
    )
}