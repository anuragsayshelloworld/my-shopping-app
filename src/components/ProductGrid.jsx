// ProductGrid.jsx
import React from 'react';
import { Plus } from 'lucide-react';
import Tooltip from './Tooltip';

function ProductGrid({ products, productCounts, handleAddToCart, loading }) {
  const skeletonArray = Array(6).fill(null); // Show 6 loading cards

  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {(loading ? skeletonArray : products).map((product, index) => (
          <div key={product?.id || index} className="group max-w-[205px]">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden 
                            hover:shadow-md hover:shadow-green-100/40 transition-all duration-300 
                            hover:-translate-y-[2px] transition-transform transition-shadow">

              {/* Product Image Area */}
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 h-32 overflow-hidden">
                {loading ? (
                  <div className="w-full h-full animate-pulse bg-gray-200" />
                ) : (
                  <>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center">
                      <div className="text-4xl opacity-30">
                        {product.name.includes('Paneer') && '🧀'}
                        {product.name.includes('Ghee') && '🧈'}
                        {product.name.includes('Lemon') && '🍋'}
                        {product.name.includes('Mango') && '🥭'}
                        {product.name.includes('Pepper') && '🌶️'}
                        {product.name.includes('Curd') && '🥛'}
                      </div>
                    </div>

                    {/* Stock Badge */}
                    <div className="absolute top-2 left-2">
                      {product.amount > 0 ? (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {product.amount} R
                        </span>
                      ) : (
                        <span className="bg-gray-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Out of Stock
                        </span>
                      )}
                    </div>

                    {/* Add to Cart */}
                    <button
  onClick={() => handleAddToCart(product.id)}
  disabled={product.amount < 1}
  className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center
              rounded-full shadow-lg transition-all duration-200
              ${product.amount < 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 hover:scale-110 text-white'}`}
>
  <Plus className="w-4 h-4" />
</button>

                  </>
                )}
              </div>

              {/* Product Info + Tooltip */}
              {loading ? (
                <div className="p-3 space-y-2 animate-pulse">
                  <div className="h-4 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-5 bg-green-100 rounded-full w-1/2" />
                </div>
              ) : (
                <Tooltip
                  text={
                    product.amount === 0
                      ? `Currently out of stock`
                      : product.unit === 'kg'
                        ? `${product.amount} kg remaining`
                        : `${product.amount} ${product.unit || 'units'} remaining`
                  }
                >
                  <div className="p-3 cursor-help">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                    {productCounts[product.id] && (
                      <div className="mt-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium text-center">
                        {productCounts[product.id]} added
                      </div>
                    )}
                  </div>
                </Tooltip>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
