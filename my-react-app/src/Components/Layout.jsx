// Layout component - Provides consistent page structure
const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header section */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Simple E-Commerce</h1>
          </div>
        </header>
        {/* Main content area */}
        <main className="max-w-7xl mx-auto py-6">{children}</main>
      </div>
    );
  };
  
  export default Layout;