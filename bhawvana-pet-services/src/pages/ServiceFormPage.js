import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceForm from '../components/ServiceForm';

const ServiceFormPage = () => {
  const { animalName } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://via.placeholder.com/')]">
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Service for {animalName}</h1>
        <ServiceForm animal={{ name: animalName }} />
      </div>
    </div>
  );
};

export default ServiceFormPage;
