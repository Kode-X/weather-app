// src/components/HourlyForecast.tsx
import React from 'react';

const HourlyForecast: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold">Hourly Forecast</h2>
      {/* Sample data */}
      <div className="flex space-x-4">
        <div className="text-center">
          <p>10 AM</p>
          <p>20°C</p>
          <p>Sunny</p>
        </div>
        <div className="text-center">
          <p>11 AM</p>
          <p>22°C</p>
          <p>Sunny</p>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
