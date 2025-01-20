import React from 'react';

function Cart({ cart, onRemove, onUpdateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <p>Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div className="item-info">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
          <div className="item-controls">
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="quantity-btn"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="quantity-btn"
            >
              +
            </button>
            <button 
              onClick={() => onRemove(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  )
}

export default Cart