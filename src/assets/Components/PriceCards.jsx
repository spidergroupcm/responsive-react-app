// PriceCards.js
import React from 'react';
import PriceCard from './PriceCard';

const PriceCards = () => {
  const plans = [
    {
      planName: 'Basic',
      price: 10,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      isPopular: false,
    },
    {
      planName: 'Standard',
      price: 20,
      features: ['Feature A', 'Feature B', 'Feature C'],
      isPopular: true,
    },
    {
      planName: 'Premium',
      price: 30,
      features: ['Feature X', 'Feature Y', 'Feature Z'],
      isPopular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 ">
      <div className="grid gap-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <PriceCard
            key={index}
            planName={plan.planName}
            price={plan.price}
            features={plan.features}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceCards;
