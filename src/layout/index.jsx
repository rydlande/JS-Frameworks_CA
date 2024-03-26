import { Link } from "react-router-dom";
import './layout.css';
import { useCartStore } from "../stores.js";

export function Layout({ children }) {
  const { cart } = useCartStore((state) => state)
  console.log(cart.length)

  const closeNav = () => {
    document.querySelector('#nav').click()
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
            </nav>
        </div>
        <p>{cart.length}</p>
      </header>

      <main className="grow">{children}</main>

      <footer>My footer</footer>
    </>
  )
}