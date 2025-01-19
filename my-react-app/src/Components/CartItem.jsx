const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-600">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <button
            className="px-2 py-1 border rounded hover:bg-gray-100"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            className="px-2 py-1 border rounded hover:bg-gray-100"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
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