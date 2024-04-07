import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCartStore } from '../../stores';
import { DropdownMenu } from './dropdown';
import { Search } from "./search";

export function Header({ products }) {
  const { cart } = useCartStore((state) => state)
  const [navOpen, setNavOpen] = useState(false);
  const navClose = useRef(null);

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
  }, []);
  
  return (
    <header ref={navClose}>
      <nav className="bg-white fixed top-0 start-0 z-50 w-full">
        <div className="flex justify-between items-center mx-auto p-2">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h10" />
            </svg>
          </button>

          <Link to="/" className="text-2xl font-semibold">
            Nonsense
          </Link>

          <Link to="/cart" className="flex justify-center items-center">
          <div className="w-4 h-6" aria-hidden={cart.length === 0}>
            {cart.length > 0 && (
              <span className="text-center block">{cart.length}</span>
            )}
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </Link>

          {navOpen && <DropdownMenu closeMenu={() => setNavOpen(false)} />}
        </div>
        
       <Search products={products} />
      </nav>
    </header>
  );
}