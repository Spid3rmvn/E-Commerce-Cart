import { useState, useEffect } from 'react'
import './App.css'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'

// Sample products, sorted by name
const products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
  { id: 4, name: "Hat", price: 15 },
  { id: 5, name: "Socks", price: 5 },
  { id: 6, name: "Backpack", price: 30 },
  { id: 7, name: "Jacket", price: 70 },
  { id: 8, name: "Scarf", price: 12 },
  { id: 9, name: "Gloves", price: 8 },
  { id: 10, name: "Watch", price: 120 },
  { id: 11, name: "Sweater", price: 50 },
  { id: 12, name: "Shorts", price: 25 },
  { id: 13, name: "Belt", price: 18 },
  { id: 14, name: "Boots", price: 85 },
  { id: 15, name: "Cap", price: 10 },
  { id: 16, name: "Shirt", price: 22 },
  { id: 17, name: "Pants", price: 38 },
  { id: 18, name: "Sunglasses", price: 45 },
  { id: 19, name: "Flip-Flops", price: 15 },
  { id: 20, name: "Hoodie", price: 55 }
].sort((a, b) => a.name.localeCompare(b.name))


function App() {
  // State for cart, initialized from localStorage if available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : [] // Default to empty cart
  })
  
  // State for search term input
  const [searchTerm, setSearchTerm] = useState('')

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Add a product to the cart, or increment quantity if it's already in the cart
  const addToCart = (product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id)
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...currentCart, { ...product, quantity: 1 }] // Add new product with quantity 1
    })
  }

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId))
  }

  // Update the quantity of an item in the cart (remove if quantity is less than 1)
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId) // Remove item if quantity is less than 1
      return
    }
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  // Filter products based on search term (case-insensitive)
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <h1>Simple E-Commerce Store</h1>
      <div className="search-sort">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className="search-input"
        />
      </div>
      <div className="container">
        <ProductList 
          products={filteredProducts} // Pass filtered products to ProductList
          onAddToCart={addToCart} // Handle adding products to cart
        />
        <Cart 
          cart={cart} // Pass current cart to Cart
          onRemove={removeFromCart} // Handle removing products from cart
          onUpdateQuantity={updateQuantity} // Handle updating product quantities in cart
        />
      </div>
    </div>
  )
}

export default App;
