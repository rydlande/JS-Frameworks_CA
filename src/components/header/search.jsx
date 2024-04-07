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
      <div className="flex flex-col justify-center" ref={searchRef}>

        <div className='flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-4 mt-2.5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={setSearch}
            className="w-full p-2 text-sm focus:outline-none"
          />
        </div>

        {isDropdownOpen && filteredProducts.length > 0 && (
          <div className="bg-white border-t border-t-gray-200 w-full">
            {filteredProducts.map((product) => (
              <Link 
                to={`/shop/${product.id}`} 
                key={product.id} 
                className="flex px-4 py-2 items-center hover:bg-gray-100 h-30 w-full object-contain cursor-pointer" 
                onClick={() => {
                  setIsDropdownOpen(false);
                  setSearchInput('');
                }}
              >

                <div className='flex items-center justify-center h-10 w-10 mr-2'>
                  <img
                    src={product.image.url} 
                    alt={product.title} 
                    className="block object-cover rounded-sm max-h-10 max-w-10 lg:rounded-lg"/>
                </div>
                
                <p className="text-sm leading-normal my-auto">{product.title}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
}