import React from 'react';

const SlidingCard = ({ title, description, image }) => {
  return (
    <div className="max-w-xs mx-2 flex-none">
      <div className="bg-white border rounded-lg overflow-hidden shadow-lg w-64">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SlidingCard;