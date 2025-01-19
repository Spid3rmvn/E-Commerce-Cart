import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({ cart, onUpdateCart, onRemoveFromCart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateCart}
              onRemove={onRemoveFromCart}
            />
          ))}
          <h3>Total Price: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
