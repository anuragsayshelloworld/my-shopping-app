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
 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  },2000);
 })
  const handleAddToCart = (productId) => {
    setCartCount(prev => prev + 1);
    setProductCounts(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  localStorage.setItem("cart", JSON.stringify(productCounts));  
  };

  useEffect(()=>{
  const cart = JSON.parse(localStorage.getItem("cart")) || '';
  setProductCounts(cart);
  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0);
  setCartCount(cartCount); 
  },[])

  const onCartClick = () =>{
    setShowCart(true);
  }

  return (
<>
{showCart && <CartModal onClose={() => setShowCart(false)} cartCount={cartCount}/>}









    <div className="min-h-screen bg-white">
      {/* Navbar remains the same */}
      <Navbar cartCount={cartCount} onCartClick={onCartClick}/>

      {/* Hero + Products Combined */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side - Hero */}
          <HeroSection />
          {/* Right Side - Products */}
        <ProductGrid
        loading={loading} 
        products={products} 
        productCounts ={productCounts} 
        handleAddToCart={handleAddToCart}/>
        </div>
      </div>

      {/* Footer remains the same */}
      <Footer />
    </div>
    </>
  );
}




