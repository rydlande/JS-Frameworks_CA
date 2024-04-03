import './App.css'
import { Layout } from './layout'
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductStore } from './stores';

function App() {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
