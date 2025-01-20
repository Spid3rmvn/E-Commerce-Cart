import React from 'react';

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="product-list">
        <h2>Products</h2>
        <p className="no-products">No products found</p>
      </div>
    )
  }

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList