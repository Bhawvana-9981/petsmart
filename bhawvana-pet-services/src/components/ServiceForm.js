import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceForm = ({ animal }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    duration: '',
    notes: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      animal: animal.name,
      ...formData,
      charges: calculateCharges(formData),
    };
    navigate('/service-summary', { state: finalData });
  };

  const calculateCharges = (data) => {
    let baseRate = 50;
    if (data.duration === 'Full Day') baseRate = 100;
    return baseRate;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Service Type</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select a service</option>
          <option value="Walking">Walking</option>
          <option value="Grooming">Grooming</option>
          <option value="Sitting">Sitting</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Duration</label>
        <select
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select duration</option>
          <option value="Half Day">Half Day</option>
          <option value="Full Day">Full Day</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ServiceForm;
