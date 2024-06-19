// src/App.tsx
import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import WeeklyForecast from './components/WeeklyForecast';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <CurrentWeather />
        <div className="mt-4">
          <HourlyForecast />
        </div>
        <div className="mt-4">
          <WeeklyForecast />
        </div>
      </div>
    </div>
  );
};

export default App;
