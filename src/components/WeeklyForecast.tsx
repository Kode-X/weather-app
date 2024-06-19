// src/components/WeeklyForecast.tsx
import React from 'react';

const WeeklyForecast: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold">Weekly Forecast</h2>
      {/* Sample data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center">
          <p>Monday</p>
          <p>18°C</p>
          <p>Cloudy</p>
        </div>
        <div className="text-center">
          <p>Tuesday</p>
          <p>22°C</p>
          <p>Sunny</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;
