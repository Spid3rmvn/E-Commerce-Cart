import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';

const PRODUCTS = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
  { id: 4, name: "Hat", price: 15 },
  { id: 5, name: "Socks", price: 5 }
];

const Index = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="page-title">Simple E-Commerce Store</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div>
          <div className="products-grid">
            {PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        <div>
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemoveItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;