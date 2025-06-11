import { ShoppingCart, X } from 'lucide-react';

function CartModal({ onClose, cartCount }) {
  return (
    <div className="fixed inset-0 z-[10000000000]">
      <div
        className="absolute top-1.5 right-[216px] w-[350px] h-[400px] bg-white rounded-lg
                   p-6 pt-12 pl-12 animate-slideDownSlow z-50"
      >
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
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed blandit velit.
        </p>
      </div>
    </div>
  );
}

export default CartModal;