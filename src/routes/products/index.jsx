export { Link } from 'react-router-dom';
import { ProductsCard } from "../../components";
import { Loader } from '../../components';
import { useProductStore } from '../../stores';


export function Products() {
  const { products, loading } = useProductStore(state => ({ products: state.products, loading: state.loading }));

  if (loading) {
    return <Loader />;
  }

    return (
      <>
      <div className='mx-1'>
        <div className='flex flex-wrap justify-center mt-28'>
          <ProductsCard products={products} />
        </div>
      </div>
      </>
    )
}