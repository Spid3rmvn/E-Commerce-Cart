function Cart({ cart, onRemove, onUpdateQuantity }) {
  // Calculate the total price of the items in the cart
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // If the cart is empty, display a message indicating that
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <p>Your cart is empty</p> {/* Display message if cart has no items */}
      </div>
    )
  }

  // Render the cart with the list of items
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        // Render each cart item
        <div key={item.id} className="cart-item">
          <div className="item-info">
            <h3>{item.name}</h3> {/* Display item name */}
            <p>${item.price}</p> {/* Display item price */}
          </div>
          <div className="item-controls">
            {/* Button to decrease quantity of the item */}
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="quantity-btn"
            >
              -
            </button>
            <span>{item.quantity}</span> {/* Display item quantity */}
            {/* Button to increase quantity of the item */}
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="quantity-btn"
            >
              +
            </button>
            {/* Button to remove the item from the cart */}
            <button 
              onClick={() => onRemove(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {/* Display total price of all items in the cart */}
      <div className="cart-total">
        <h3>Total: ${total}</h3> {/* Display the total amount */}
      </div>
    </div>
  )
}

export default Cart;
