import React from 'react';

const ServiceSummary = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Summary for {data.animal}</h2>
      <p><strong>Service Type:</strong> {data.serviceType}</p>
      <p><strong>Duration:</strong> {data.duration}</p>
      <p><strong>Notes:</strong> {data.notes}</p>
      <p><strong>Charges:</strong> ${data.charges}</p>
    </div>
  );
};

export default ServiceSummary;
