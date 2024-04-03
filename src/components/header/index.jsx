import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useProductStore } from '../../stores';
import { useCartStore } from '../../stores';

export function Header() {
    const { cart } = useCartStore((state) => state)
    const { products } = useProductStore((state) => state)
    const [searchInput, setSearchInput] = useState('');
    const [navOpen, setNavOpen] = useState(false);
    const navClose = useRef(null);

    const filteredProducts = searchInput
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : [];

    function setSearch(e) {
      setSearchInput(e.target.value)
    }

    useEffect(() => {
        function handleNavClose(e) {
            if (navClose.current && !navClose.current.contains(e.target)) {
                setNavOpen(false);
            }
        }
        document.addEventListener("mousedown", handleNavClose);
        return () => {
            document.removeEventListener("mousedown", handleNavClose);
        };
    }, [navClose]);

    return (
       <>
        <header className="flex justify-between" ref={navClose}>
          <div className="relative">
              <label htmlFor="nav" className="cursor-pointer">NAVBAR</label>
              <input type="checkbox" name="nav" id="nav" className="hidden" onChange={() => setNavOpen(!navOpen)}/>
              <nav className={`${navOpen ? "flex" : "hidden"} absolute bg-white flex-col`}>
                  <Link to="/" onClick={() => setNavOpen(false)}>Home</Link>
                  <Link to="/shop" onClick={() => setNavOpen(false)}>Shop All</Link>
                  <Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link>
              </nav>
          </div>

          <div className="flex">
            <input type="text" placeholder="Search..." value={searchInput} onChange={setSearch} className="placeholder:italic" />
            {filteredProducts.length > 0 && (
              <div>
                {filteredProducts.map((product) => (
                  <Link to={`/shop/${product.id}`} key={product.id}>
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
      </>
    )
}



/* import { Link } from "react-router-dom";
import { useState } from "react";
import { useProductStore } from '../../stores';
import { useCartStore } from '../../stores';
import './header.css';

export function Header() {
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
      </>
    )
} */