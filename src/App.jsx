import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import CartModal from './components/CartModel';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [productCounts, setProductCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: "Fresh Paneer",
      price: 100,
      originalPrice: 300,
      amount: 0,
      image: "/paneer.jpg",
      unit: "kg"
    },
    {
      id: 2,
      name: "Pure Ghee",
      price: 250,
      originalPrice: 800,
      amount: 5,
      image: "/ghee.jpg",
      unit: "kg"
    },
    {
      id: 3,
      name: "Lemon Pickle",
      price: 80,
      originalPrice: 200,
      amount: 5,
      image: "/lemon.jpg",
      unit: "jar"
    },
    {
      id: 4,
      name: "Mango Pickle",
      price: 90,
      originalPrice: 250,
      amount: 5,
      image: "/mango.jpg",
      unit: "jar"
    },
    {
      id: 5,
      name: "Pepper Pickle",
      price: 90,
      originalPrice: 250,
      amount: 5,
      image: "/pepper.jpg",
      unit: "jar"
    },
    {
      id: 6,
      name: "Curd",
      price: 90,
      originalPrice: 250,
      amount: 5,
      image: "/curd.jpg",
      unit: "kg"
    }
  ];

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (productId) => {
    setCartCount(prev => prev + 1);
    setProductCounts(prev => {
      const updatedCounts = {
        ...prev,
        [productId]: (prev[productId] || 0) + 1
      };
      localStorage.setItem("cart", JSON.stringify(updatedCounts));
      return updatedCounts;
    });
  };

  // Load cart from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    setProductCounts(cart);
    const totalCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
    setCartCount(totalCount);
  }, []);

  // When cart icon clicked
  const onCartClick = (e) => {
    e.stopPropagation(); // Prevent click bubbling to body
    setShowCart(true);
  };

  // Close modal if clicking outside
  const onBackdropClick = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && (
        <div
          className="fixed inset-0 z-[999999] bg-black/0"
          onClick={onBackdropClick}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <CartModal 
            onClose={() => setShowCart(false)} 
            cartCount={cartCount}
            setCartCount={setCartCount} 
            products={products}/>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-white">
        <Navbar cartCount={cartCount} onCartClick={onCartClick} />

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <HeroSection />
            <ProductGrid
              loading={loading}
              products={products}
              productCounts={productCounts}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
