import { Link } from 'react-router-dom';

export function DropdownMenu({ closeMenu }) {
    return (
        <div className="absolute mt-40 left-0 w-full py-1 bg-white z-10 text-dark">
          <Link to="/" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Home</Link>
          <Link to="/shop" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Shop all</Link>
          <Link to="/contact" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Contact</Link>
        </div>
    );
  }