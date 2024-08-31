import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimalSelection from './pages/AnimalSelection';
import ServiceFormPage from './pages/ServiceFormPage';
import ServiceSummaryPage from './pages/ServiceSummaryPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AnimalSelection />} />
        <Route path="/service-form/:animalName" element={<ServiceFormPage />} />
        <Route path="/service-summary" element={<ServiceSummaryPage />} />
      </Routes>
    </div>
  );
}

export default App;
