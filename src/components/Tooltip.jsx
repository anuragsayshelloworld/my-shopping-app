// Tooltip.jsx
import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group inline-block w-full">
      {/* The element that triggers the tooltip */}
      {children}

      {/* Tooltip box */}
      <div className="absolute top-0 left-0 -translate-y-full mb-2
                      w-full px-3 py-1.5 bg-gray-900 text-white text-sm rounded
                      opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                      transition-all duration-300 ease-out z-[9999] pointer-events-none
                      shadow-xl text-center">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
