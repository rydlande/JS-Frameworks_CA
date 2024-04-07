import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

export function Search({ products }) {
    const [searchInput, setSearchInput] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const searchRef = useRef(null);
  
    const filteredProducts = searchInput
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchInput.toLowerCase())
      ) : [];
  
    useEffect(() => {
      function handleClickOutside(e) {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
          setIsDropdownOpen(false); 
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    function setSearch(e) {
      setSearchInput(e.target.value);
      if(e.target.value !== ''){
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen(false);
      }
    }
  
    return (
      <>
      <div className="relative mx-auto w-full max-w-xl md:mr-10" ref={searchRef}>
        <div className='flex flex-row items-center justify-center border-b-0 lg:border-b border-gray-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 md:ml-1 mt-1 md:mt-1.5 text-gray-500 md:w-6 md:h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={setSearch}
            className="w-full py-2 md:py-1 pl-1.5 text-sm bg-white focus:outline-none md:text-base"
          />
        </div>

        {isDropdownOpen && filteredProducts.length > 0 && (
          <div className="absolute top-full mt-0 w-full bg-white shadow-lg z-10">
            {filteredProducts.map((product) => (
              <Link 
                to={`/shop/${product.id}`} 
                key={product.id} 
                className="flex items-center px-4 py-2 hover:bg-pink-50 cursor-pointer" 
                onClick={() => {
                  setIsDropdownOpen(false);
                  setSearchInput('');
                }}
              >
                <img
                  src={product.image.url} 
                  alt={product.title} 
                  className="h-10 w-10 object-cover rounded-sm mr-2"
                />
                <p className="text-sm leading-normal my-auto">{product.title}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      </>
    );
}