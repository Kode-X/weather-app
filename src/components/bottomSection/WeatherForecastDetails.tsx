import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Card, Text, Group } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { capitalizeFirstThreeChars, getCurrentDay } from "../utils/getUtils";

interface DayData {
  realFeel: number;
  wind: number;
  chanceOfRain: number;
  uvIndex: number;
}

interface WeatherData {
  [day: string]: DayData;
}

const mockupData: WeatherData = {
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

const WeatherCarousel: React.FC = () => {
    const currentDay = getCurrentDay();
  const [selectedDay, setSelectedDay] = useState<DayData | null>(mockupData[currentDay]);

  const handleDayClick = (day: string) => {
    setSelectedDay(mockupData[day]);
  };

  return (
    <div className="container mx-auto p-4">
      <Carousel
        withIndicators
        height={200}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
      >
        {Object.keys(mockupData).map((day) => (
          <Carousel.Slide key={day} onClick={() => handleDayClick(day)}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="cursor-pointer"
              style={{
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Group style={{ marginBottom: 5, marginTop: 5 }}>
                <Text>{capitalizeFirstThreeChars(day)}</Text>
              </Group>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>

      {selectedDay && (
        <Card shadow="sm" padding="lg" radius="md" withBorder className="mt-4">
          <Text size="lg" mb="sm">
            Weather Details
          </Text>
          <Text>Real Feel: {selectedDay.realFeel.toFixed(2)}°C</Text>
          <Text>Wind: {selectedDay.wind.toFixed(2)} km/h</Text>
          <Text>Chance of Rain: {selectedDay.chanceOfRain.toFixed(2)}%</Text>
          <Text>UV Index: {selectedDay.uvIndex}</Text>
        </Card>
      )}
    </div>
  );
};

export default WeatherCarousel;
