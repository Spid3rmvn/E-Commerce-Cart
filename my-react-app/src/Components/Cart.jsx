// Cart component - Manages the shopping cart display
import CartItem from "./CartItem";

const Cart = ({ items, onRemove, onUpdateQuantity }) => {
  // Calculate total price of items in cart
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      </div>
      <div className="p-4">
        {/* Show message if cart is empty, otherwise show items */}
        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {/* Map through cart items and render CartItem component for each */}
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={onRemove}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
            {/* Show total price */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;