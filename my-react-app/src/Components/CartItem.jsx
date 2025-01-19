import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (e) => {
    const quantity = Math.max(1, parseInt(e.target.value) || 1);
    onUpdateQuantity(item.id, quantity);
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>
        Quantity:{" "}
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
        />
      </p>
      <p>Subtotal: ${item.price * item.quantity}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
