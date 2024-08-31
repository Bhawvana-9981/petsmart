import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';

const animals = [
  { name: 'Dog' },
  { name: 'Cat' },
  { name: 'Bird' },
];

const AnimalSelection = () => {
  const navigate = useNavigate();

  const handleAnimalSelect = (animal) => {
    navigate(`/service-form/${animal.name}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://via.placeholder.com/')]">
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Bhawvana Pet Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <AnimalCard 
              key={animal.name} 
              animal={animal} 
              onSelect={handleAnimalSelect} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalSelection;
