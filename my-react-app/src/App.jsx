import React, { useState } from 'react';
import './App.css';

// Our list of products
const products = [
  { id: 1, name: "Basic T-Shirt", price: 19.99 },
  { id: 2, name: "Blue Jeans", price: 49.99 },
  { id: 3, name: "Running Sneakers", price: 79.99 },
  { id: 4, name: "Baseball Cap", price: 24.99 },
  { id: 5, name: "Wool Socks 3-Pack", price: 15.99 },
  { id: 6, name: "Hoodie", price: 39.99 },
  { id: 7, name: "Winter Jacket", price: 89.99 },
  { id: 8, name: "Leather Belt", price: 29.99 },
  { id: 9, name: "Sunglasses", price: 34.99 },
  { id: 10, name: "Dress Shirt", price: 54.99 },
  { id: 11, name: "Sweatpants", price: 44.99 },
  { id: 12, name: "Beanie", price: 19.99 },
  { id: 13, name: "Sandals", price: 29.99 },
  { id: 14, name: "Backpack", price: 49.99 },
  { id: 15, name: "Scarf", price: 24.99 },
  { id: 16, name: "Gloves", price: 19.99 },
  { id: 17, name: "Tank Top", price: 17.99 },
  { id: 18, name: "Shorts", price: 34.99 },
  { id: 19, name: "Rain Jacket", price: 64.99 },
  { id: 20, name: "Wallet", price: 39.99 }
];

// Functional component definition
function App() {
  // useState hook to manage the cart (initially empty) and search text (initially an empty string)
  const [cart, updateCart] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Function to add items to the cart
  const addToCart = (product) => {
    updateCart((currentCart) => {
      // Check if the product is already in the cart
      const foundItem = currentCart.find(item => item.id === product.id);

      if (foundItem) {
        // If item is already in the cart, increase its quantity by 1
        return currentCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item is not in the cart, add it with quantity 1
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    // Filter the cart to remove the item with the matching productId
    updateCart((currentCart) => currentCart.filter(item => item.id !== productId));
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      // If the new quantity is less than 1, remove the item from the cart
      removeFromCart(productId);
      return;
    }

    // Update the quantity of the item with the given productId
    updateCart((currentCart) => currentCart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Function to handle search input changes
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // Calculate total price of all items in the cart
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Filter the products based on the search text
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Shop Easy</h1>

      {/* Search box */}
      <div className="search-sort">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}  // Controlled component: value comes from searchText state
          onChange={handleSearch}  // Updates searchText state when the input changes
          className="search-input"
        />
      </div>

      <div className="container">
        {/* Products Section */}
        <div className="product-list">
          <h2>Products</h2>
          <div className="products">
            {/* Map through filteredProducts and display each one */}
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                {/* Button to add the product to the cart */}
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Cart Section */}
        <div className="cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {/* Map through cart items and display each one */}
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <div className="item-controls">
                    {/* Button to decrease item quantity */}
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    {/* Display the current item quantity */}
                    <span>{item.quantity}</span>
                    {/* Button to increase item quantity */}
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                    {/* Button to remove the item from the cart */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              {/* Display total price of all items in the cart */}
              <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
