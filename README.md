# Simple E-Commerce Store

A lightweight e-commerce store built with React and Vite, featuring a clean and modern user interface with essential shopping cart functionality.

## Features

- **Product Display**: Clean grid layout of products with names and prices
- **Shopping Cart**: Full-featured cart with quantity controls and total calculation
- **Search Functionality**: Real-time product filtering by name
- **Persistent Cart**: Shopping cart state is saved in localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Alphabetical Sorting**: Products are automatically sorted by name
- **Empty State Handling**: Displays appropriate messages for empty cart and search results

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Create a production build:
```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Cart.jsx        # Shopping cart component
│   └── ProductList.jsx # Product display component
├── App.jsx            # Main application component
├── App.css            # Application styles
├── index.css          # Global styles
└── main.jsx          # Application entry point
```

## Technologies Used

- React 18
- Vite
- CSS3 with modern features
- LocalStorage for persistence

## Features in Detail

### Shopping Cart
- Add/remove products
- Adjust quantities
- Persistent across page reloads
- Real-time total calculation

### Product Display
- Responsive grid layout
- Alphabetically sorted products
- Search functionality
- Empty state handling

### UI/UX
- Clean, modern design
- Responsive buttons with hover effects
- Intuitive quantity controls
- Clear visual feedback

