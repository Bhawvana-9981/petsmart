import React from 'react';

const AnimalCard = ({ animal, onSelect }) => {
  return (
    <div 
      className="p-6 bg-gray-200 rounded-lg shadow-md cursor-pointer hover:bg-gray-300"
      onClick={() => onSelect(animal)}
    >
      <h2 className="text-xl font-bold text-center">{animal.name}</h2>
    </div>
  );
};

export default AnimalCard;
