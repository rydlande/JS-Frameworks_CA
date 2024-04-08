import { Link } from 'react-router-dom';

export function DropdownMenu({ closeMenu }) {
    return (
        <div className="absolute mt-40 left-0 w-full py-1 bg-white z-10 text-dark">
          <Link to="/" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-gray">Home</Link>
          <Link to="/shop" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-gray">Shop all</Link>
          <Link to="/contact" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-gray">Contact</Link>
        </div>
    );
  }