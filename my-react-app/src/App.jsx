import React, { useState } from "react";
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { products } from './data/product';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  // Add product to the cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update the quantity of an item in the cart
  const updateCart = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove an item from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="app">
      <h1>Simple E-Commerce Cart</h1>
      <ProductList products={products} onAddToCart={addToCart} />
      <Cart
        cart={cart}
        onUpdateCart={updateCart}
        onRemoveFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
