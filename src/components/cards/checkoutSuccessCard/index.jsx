
export function CheckoutSuccessCard({ order }) {

    return (
        <>
            {order.map((product) => (
           <div key={product.id}>
             <img src={product.image.url} alt={product.title} />
             <h2>{product.title}</h2>
             <p>Quantity: {product.quantity}</p>
             <p>Price: {product.price}</p>
           </div>
         ))}
        </>
    )
}