import { Layout } from './layout'
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductStore } from './stores';

function App() {
  const { products, fetchProducts } = useProductStore((state) => ({
    products: state.products,
    fetchProducts: state.fetchProducts,
  }));

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <div className="flex flex-col h-screen">
      <Layout products={products}>
        <Outlet context={{ products }} />
      </Layout>
    </div>
    </>
  )
}

export default App
