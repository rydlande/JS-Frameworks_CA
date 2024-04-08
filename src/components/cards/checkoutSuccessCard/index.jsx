import { Link } from 'react-router-dom';

export function CheckoutSuccessCard({ order }) {
  const subtotal = order.reduce((acc, product) => acc + product.discountedPrice * product.quantity, 0);
  const originalTotal = order.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const discount = originalTotal - subtotal;
  const totalCost = subtotal;

  return (
    <div className="max-w-md mx-auto">
      {order.map((product) => (
        <div key={product.id} className="flex my-3 rounded-sm shadow-lg">
          <Link to={`/shop/${product.id}`} className="w-24 h-24 flex-shrink-0">
            <img src={product.image.url} alt={product.title} className="w-full h-full object-cover rounded-l-sm" />
          </Link>
          <div className="flex flex-col justify-between ml-2 my-2 flex-grow items-start">
              <Link to={`/shop/${product.id}`} className="text-sm font-medium">{product.title}</Link>
              <p className="text-xs">{product.discountedPrice.toFixed(2)} NOK</p>
              <p className="text-xs">{product.quantity} item(s)</p>
          </div>
        </div>
      ))}

      <div className="mt-4 p-4  rounded-md shadow-lg">
        <p className="text-lg font-semibold mb-4">Price Summary</p>
        <div className="flex justify-between mt-2">
          <p>Subtotal:</p>
          <p>{subtotal.toFixed(2)} NOK</p>
        </div>
        {discount > 0 && (
          <div className="flex justify-between">
            <p>Discount:</p>
            <p>-{discount.toFixed(2)} NOK</p>
          </div>
        )}
        <div className="flex justify-between font-semibold mt-2">
          <p>Total Cost:</p>
          <p>{totalCost.toFixed(2)} NOK</p>
        </div>
      </div>
    </div>
  );
}
