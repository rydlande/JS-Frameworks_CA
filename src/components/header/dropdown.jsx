import { Link } from 'react-router-dom';

export function DropdownMenu({ closeMenu }) {
    return (
        <div className="absolute mt-36 left-0 w-full py-1 bg-white z-10">
          <Link to="/" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/shop" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shop all</Link>
          <Link to="/contact" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
        </div>
    );
  }