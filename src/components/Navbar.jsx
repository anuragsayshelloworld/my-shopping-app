import { ShoppingCart} from 'lucide-react';
function Navbar({cartCount, onCartClick}){
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FH</span>
                </div>
                <span className="text-xl font-semibold text-gray-800">Fresh Homemade</span>
              </div>
              <div className="border-l border-gray-200 h-6"></div>
              <div className="relative">
                <ShoppingCart onClick={onCartClick} className="w-6 h-6 text-gray-700 hover:text-green-600 cursor-pointer transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
}

export default Navbar;