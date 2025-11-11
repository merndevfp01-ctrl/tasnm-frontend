import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-md mb-2">
          <button
            className="flex justify-between items-center w-full p-4 text-left text-xs text-white font-semibold bg-gray-800  focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white text-gray-700 transition-all duration-300 ease-in-out">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;