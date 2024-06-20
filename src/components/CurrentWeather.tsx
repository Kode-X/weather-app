// src/components/CurrentWeather.tsx
import React from "react";

/**
 * Component to display current weather conditions.
 * @component
 * @example
 * return (
 *   <CurrentWeather />
 * )
 */
const CurrentWeather: React.FC = () => (
  <div className="p-4 bg-white rounded shadow-md">
    <h2 className="text-2xl font-bold">Current Weather</h2>
    <p>City: Sample City</p>
    <p>Temperature: 25°C</p>
    <p>Condition: Sunny</p>
  </div>
);

export default CurrentWeather;
