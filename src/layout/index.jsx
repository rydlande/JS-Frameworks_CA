import { Header, Footer } from "../components";
import './layout.css';

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}