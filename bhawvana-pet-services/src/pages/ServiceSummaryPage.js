import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ServiceSummary from '../components/ServiceSummary';

const ServiceSummaryPage = () => {
  const location = useLocation();
  const serviceData = location.state;
  const navigate = useNavigate();

  const handleStartAgain = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://via.placeholder.com/')]">
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Service Summary</h1>
        {serviceData ? (
          <>
            <ServiceSummary data={serviceData} />
            <button
              onClick={handleStartAgain}
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Start Again
            </button>
          </>
        ) : (
          <p className="text-center text-red-500">No service data available.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceSummaryPage;
