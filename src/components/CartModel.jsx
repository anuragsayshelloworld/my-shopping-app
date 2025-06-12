import { ShoppingCart, X, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

function CartModal({ onClose, cartCount, setCartCount, products }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, [products]);

  const loadCart = () => {
    const data = JSON.parse(localStorage.getItem("cart")) || {};
    const items = products
      .filter(product => data[product.id])
      .map(product => ({
        ...product,
        quantity: data[product.id]
      }));
    setCartItems(items);

    // Update cart count for parent
    const newCount = Object.values(data).reduce((sum, qty) => sum + qty, 0);
    setCartCount(newCount);
  };

  const handleRemove = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Re-sync local cart + update cartCount
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="fixed inset-0 z-[10000000000] pointer-events-none">
      <div
        className="pointer-events-auto absolute top-1.5 right-[216px] w-[350px] h-[400px] bg-white rounded-lg
                   p-6 pt-12 pl-12 animate-slideDownSlow z-50 shadow-lg flex flex-col justify-between"
      >
        {/* Top Icons */}
        <div>
          <ShoppingCart
            className="absolute top-4 left-4 w-6 h-6 text-gray-700 hover:text-green-600 cursor-pointer transition-colors"
          />
          {cartCount > 0 && (
            <span className="absolute top-2 left-8 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              {cartCount}
            </span>
          )}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Cart Items */}
          <div className="overflow-y-auto max-h-[270px] pr-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 border-b border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.quantity} × ₹{item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm text-green-600">
                      ₹{item.quantity * item.price}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-400 hover:text-red-500 transition"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Checkout Section */}
        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-gray-300">
            <div className="flex justify-between mb-2 font-semibold">
              <span>Total:</span>
              <span>₹{totalPrice}</span>
            </div>
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition"
              onClick={() => alert('Proceeding to checkout...')}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
