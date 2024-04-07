import { Header, Footer } from "../components";

export function Layout({ children, products }) {
  return (
    <>
      <Header products={products}/>
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}