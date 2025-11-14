import React, { useState } from 'react';

const Tooltip = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children} 

      {showTooltip && (
        <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2">
          <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
            {content} 
          </div>
          <div className="w-3 h-3 bg-gray-800 absolute bottom-0 left-1/2 -translate-x-1/3 rotate-45 -mb-1"></div> {/* Optional: Arrow */}
        </div>
      )}
    </div>
  );
};

export default Tooltip;