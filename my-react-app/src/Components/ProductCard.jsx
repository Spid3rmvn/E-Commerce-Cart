// ProductCard component - Displays individual product information
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="p-6">
        {/* Product name */}
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        {/* Product price with formatting */}
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        {/* Add to cart button with click handler */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;