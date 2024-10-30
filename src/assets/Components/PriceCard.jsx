// PriceCard.js
import React from 'react';
import PropTypes from 'prop-types';

const PriceCard = ({ planName, price, features, isPopular }) => {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-md flex flex-col ${isPopular ? 'border border-blue-500' : ''}`}>
      <h2 className="text-xl font-semibold">{planName}</h2>
      <p className="text-4xl font-bold text-blue-600 my-4">${price}/month</p>
      {isPopular && <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded-full">Most Popular</span>}
      
      {/* Main content with flex-grow to push button to bottom */}
      <div className="flex-grow mt-4 mb-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Button aligned at bottom */}
      <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Choose Plan
      </button>
    </div>
  );
};

PriceCard.propTypes = {
  planName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPopular: PropTypes.bool,
};

PriceCard.defaultProps = {
  isPopular: false,
};

export default PriceCard;
