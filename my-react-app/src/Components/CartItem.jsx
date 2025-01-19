// CartItem component - Displays individual items in the cart
const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      {/* Item details */}
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-600">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      {/* Quantity controls and remove button */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {/* Decrease quantity button */}
          <button
            className="px-2 py-1 border rounded hover:bg-gray-100"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          {/* Quantity display */}
          <span className="w-8 text-center">{item.quantity}</span>
          {/* Increase quantity button */}
          <button
            className="px-2 py-1 border rounded hover:bg-gray-100"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        {/* Remove item button */}
        <button
          className="px-2 py-1 border rounded bg-red-500 text-white hover:bg-red-600"
          onClick={() => onRemove(item.id)}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CartItem;