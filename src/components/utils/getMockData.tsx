import {
  IconCloud,
  IconBrandSafari,
  IconMapPin,
  IconSettings,
} from "@tabler/icons-react";

export const tabs = [
  { label: "Σάμος", value: "sunny" },
  { label: "Αλεξανδρούπολη", value: "rainy" },
  { label: "Θεσσαλονίκη", value: "cloudy" },
  { label: "Αθήνα", value: "stormy" },
];

export const leftTopNavbar = [
  { label: "Weather", icon: IconCloud },
  { label: "Explore", icon: IconBrandSafari },
  { label: "Cities", icon: IconMapPin },
  { label: "Settings", icon: IconSettings },
];

export const dataChart = [
  { name: "January", uv: 4000, pv: 26, amt: 2400 },
  { name: "February", uv: 3000, pv: 26, amt: 2210 },
  { name: "March", uv: 2000, pv: 22, amt: 2290 },
  { name: "April", uv: 2780, pv: 16, amt: 2000 },
  { name: "May", uv: 1890, pv: 25, amt: 2181 },
  { name: "June", uv: 2390, pv: 22, amt: 2500 },
  { name: "July", uv: 3490, pv: 21, amt: 2100 },
];

export interface DayData {
  realFeel: number;
  wind: number;
  chanceOfRain: number;
  uvIndex: number;
}

interface WeatherData {
  [day: string]: DayData;
}

export const mockupData: WeatherData = {
  Monday: {
    realFeel: Math.random() * 30 + 10,
    wind: Math.random() * 20,
    chanceOfRain: Math.random() * 100,
    uvIndex: Math.floor(Math.random() * 11),
  },
  Tuesday: {
    realFeel: Math.random() * 30 + 10,
    wind: Math.random() * 20,
    chanceOfRain: Math.random() * 100,
    uvIndex: Math.floor(Math.random() * 11),
  },
  Wednesday: {
    realFeel: Math.random() * 30 + 10,
    wind: Math.random() * 20,
    chanceOfRain: Math.random() * 100,
    uvIndex: Math.floor(Math.random() * 11),
  },
  Thursday: {
    realFeel: Math.random() * 30 + 10,
    wind: Math.random() * 20,
    chanceOfRain: Math.random() * 100,
    uvIndex: Math.floor(Math.random() * 11),
  },
  Friday: {
    realFeel: Math.random() * 30 + 10,
    wind: Math.random() * 20,
    chanceOfRain: Math.random() * 100,
    uvIndex: Math.floor(Math.random() * 11),
  },
  Saturday: {
    realFeel: Math.random() * 30 + 10,
    wind: Math.random() * 20,
    chanceOfRain: Math.random() * 100,
    uvIndex: Math.floor(Math.random() * 11),
  },
  Sunday: {
    realFeel: Math.random() * 30 + 10,
    wind: Math.random() * 20,
    chanceOfRain: Math.random() * 100,
    uvIndex: Math.floor(Math.random() * 11),
  },
};
