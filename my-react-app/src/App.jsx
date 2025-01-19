import { useState, useEffect } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
  { id: 4, name: "Hat", price: 15 },
  { id: 5, name: "Socks", price: 5 }
]

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  const [sortBy, setSortBy] = useState('name')
  const [sortDirection, setSortDirection] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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
      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
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

  const sortProducts = (products) => {
    return [...products].sort((a, b) => {
      const modifier = sortDirection === 'asc' ? 1 : -1
      if (sortBy === 'name') {
        return modifier * a.name.localeCompare(b.name)
      }
      return modifier * (a.price - b.price)
    })
  }

  const filteredAndSortedProducts = sortProducts(
    products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const handleSort = (field) => {
    if (field === sortBy) {
      setSortDirection(current => current === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortDirection('asc')
    }
  }

  return (
    <div className="app">
      <h1>Simple E-Commerce Store</h1>
      <div className="search-sort">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="sort-buttons">
          <button 
            onClick={() => handleSort('name')}
            className={`sort-btn ${sortBy === 'name' ? 'active' : ''}`}
          >
            Sort by Name {sortBy === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
          </button>
          <button 
            onClick={() => handleSort('price')}
            className={`sort-btn ${sortBy === 'price' ? 'active' : ''}`}
          >
            Sort by Price {sortBy === 'price' && (sortDirection === 'asc' ? '↑' : '↓')}
          </button>
        </div>
      </div>
      <div className="container">
        <ProductList 
          products={filteredAndSortedProducts} 
          onAddToCart={addToCart} 
        />
        <Cart 
          cart={cart} 
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </div>
  )
}

export default App;