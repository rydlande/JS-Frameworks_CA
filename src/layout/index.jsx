import { Link } from "react-router-dom";
import './layout.css';
import { useCartStore } from "../stores.js";
import { useProductStore } from '../stores';
import { useState } from "react";


export function Layout({ children }) {
  const { cart } = useCartStore((state) => state)
  const { products } = useProductStore((state) => state)
  const [searchInput, setSearchInput] = useState('');

  const filteredProducts = searchInput
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : [];

  const closeNav = () => {
    document.querySelector('#nav').click()
  }

  function setSearch(e) {
    setSearchInput(e.target.value)
  }

  return (
    <>
      <header className="flex justify-between">
        <div className="relative">
            <label htmlFor="nav">NAVBAR</label>
            <input type="checkbox" name="nav" id="nav" className="hidden"/>
            <nav className="hidden">
                <Link to="/" onClick={closeNav}>Home</Link>
                <Link to="/shop" onClick={closeNav}>Shop All</Link>
                <Link to="/contact" onClick={closeNav}>Contact</Link>
            </nav>
        </div>

        <div className="flex">
          <input type="text" placeholder="Search..." value={searchInput} onChange={setSearch} />
          {filteredProducts.length > 0 && (
            <div>
              {filteredProducts.map((product) => (
                <Link to={`/shop/${product.id}`} key={product.id}>
                  {/* <div className="productCard">
                    <img src={product.image.url} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.price.formatted}</p>
                  </div> */}
                  <div>
                    <p>{product.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          
          )}
          <Link to="/cart">
            <p>Cart ({cart.length})</p>
          </Link>
        </div>
      </header>

      <main className="grow">{children}</main>

      <footer>My footer</footer>
    </>
  )
}